import { reset } from 'redux-form'
import { registerAPI} from '../DAL/DAL'

const REGISTRATION = "REGISTRATION"

let initialState = {
    isRegister: false
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION:
            return{
                ...state,
                isRegister: action.isRegister
            }
        default:
            return state
    }
}

export const registrationActionCreator = (isRegister) => ({type: REGISTRATION, isRegister})

export const registerThunkCreator = (email, password) => {
    return(dispatch) => {
        registerAPI.registerUser(email, password).then(data =>{
            if(data.resultCode === 0){
                dispatch(registrationActionCreator(true))
                dispatch(reset('register'))
            }
        })
    }
}

export default registerReducer