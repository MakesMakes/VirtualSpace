import {modelAPI} from './../DAL/DAL'

const SET_MODEL = "SET-MODEL";
const OPEN_INFO = "OPEN_INFO";
const SET_INFO = "SET_INFO";
const CLOSE_INFO = "CLOSE_INFO";

let initialState = {
    model: [],
    modal: false,
    info: ""
}

const modelPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODEL:
            return {
                ...state,
                model: action.model
            }
        case OPEN_INFO:
            return {
                ...state,
                modal: action.payload
            }
        case SET_INFO:
            return {
                ...state,
                info: action.info
            }

        case CLOSE_INFO:
            return {
                ...state,
                modal: action.payload
            }

        default:
            return state;
    }
}

export const setModelAC = (model) => ({ type: SET_MODEL, model })
export const openInfoAC = () => ({ type: OPEN_INFO, payload: true })
export const setInfoAC = (info) => ({ type: SET_INFO, info })
export const closeInfoAC = () => ({ type: CLOSE_INFO, payload: false })

export const setModelTC = (id) => {
    return(dispatch)=>{
        modelAPI.getModel(id).then(data => {
            dispatch(setModelAC(data))
        })
    }
}

export const setInfoTC = (id) => {
    return(dispatch)=>{
        modelAPI.getModel(id).then(data => {
            dispatch(setInfoAC(data))
        })
    }
}

export default modelPageReducer;