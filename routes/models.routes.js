const { Router } = require('express')
const router = Router()
const Model = require('../schems/models')


router.get('/models', (req, res) => {
    Model.find({})
        .then(model => { res.send(model) })
        .catch(err => res.status(400).json('Error: ' + err))
});

router.get("/models/:id", (req, res) => {
    Model.findById({ _id: req.params.id })
        .then(model => { res.send(model) })
        .catch(err => res.status(400).json('Error: ' + err))
});

router.get("/models/:id/details", (req, res) => {
    Model.findById(req.params.id, "complect_details")
        .then((details) => { res.send(details) })
        .catch(err => res.status(400).json('Error: ' + err))
});

router.get("/models/:id/details/:detailId", (req, res) => {
    const {id, detailId} = req.params;
    Model.findById(id, "complect_details")
        .then((details) => {
            return Object.values(details.complect_details)
            .find(item => item.id === detailId)
        } )
        .then((details) => {res.send(details)})
        .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/models', (req, res) => {
    Model.create(req.body)
        .then(model => { res.send(model) })
        .catch(err => res.status(400).json('Error: ' + err))
})

router.put("/models/:id", (req, res) => {
    Model.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            Model.findOne({ _id: req.params.id })
                .then(model => { res.send(model) })
                .catch(err => res.status(400).json('Error: ' + err))
        });
});

router.delete("/models/:id", (req, res) => {
    Model.deleteOne({ _id: req.params.id })
        .then(model => { res.send(model) })
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router