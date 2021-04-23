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

export const setDetailsAC = (details, modelId) => ({ type: SET_DETAILS, details, modelId})

export default detailsPageReducer;