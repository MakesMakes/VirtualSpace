import { detailsAPI } from './../DAL/DAL'

const SET_DETAILS = "SET-DETAILS";

let initialState = {
    details: [],
    modelId: ''
}

const detailsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DETAILS:
            return {
                ...state,
                details: action.details.complect_details,
                modelId: action.details._id
            }
        default:
            return state;
    }
}

export const setDetailsAC = (details) => ({ type: SET_DETAILS, details })

export const setDetailsTC = (id) => {
    return (dispatch) => {
        detailsAPI.getDetails(id).then(data => {
            dispatch(setDetailsAC(data))
        })
    }
}

export default detailsPageReducer;