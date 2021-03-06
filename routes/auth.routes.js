const { Router } = require('express')
const bcrypt = require('bcryptjs')
const router = Router()
const User = require('../schems/user')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 10 символов').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации',
                    resultCode: 1
                })
            }

            const { email, password } = req.body

            const candidate = await User.findOne({ email: email })

            if (candidate) {
                return(
                  res.status(400).json({ message: 'Такой пользователь уже есть', resultCode: 2 }
                ) )
            }
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: hashedPassword })

            await user.save()

            res.status(201).json({ message: 'Пользователь создан', resultCode: 0 })

        } catch (e) {
            res.status(500).json({ message: 'Ohhhh sorry, but he got error', resultCode: 3 })
        }
    })

    router.post(
        '/login',
        [
          check('email', 'Введите корректный email').normalizeEmail().isEmail(),
          check('password', 'Введите пароль').exists()
        ],
        async (req, res) => {
        try {
          const errors = validationResult(req)
      
          if (!errors.isEmpty()) {
            return res.status(400).json({
              errors: errors.array(),
              message: 'Некорректный данные при входе в систему',
              resultCode: 1
            })
          }
      
          const {email, password} = req.body
      
          const user = await User.findOne({ email })
      
          if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден', resultCode: 2 })
          }
      
          const isMatch = await bcrypt.compare(password, user.password)
      
          if (!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль, попробуйте снова', resultCode: 3 })
          }
      
          const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
          )
      
          res.json({ token, userId: user.id, resultCode: 0 })
      
        } catch (e) {
          res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
      })


module.exports = router