import { loginAPI } from '../DAL/DAL'

const LOGIN = "LOGIN"

let initialState = {
    isAuth: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const loginActionCreator = (isAuth) => ({ type: LOGIN, isAuth })

export const loginThunkCreator = (email, password) => {
    return (dispatch) => {
        loginAPI.loginUser(email, password).then(data => {
            if (data.resultCode === 0) {
                dispatch(loginActionCreator(true))
                localStorage.setItem("token", data.token)
                
            }
        })
    }
}

export default loginReducer