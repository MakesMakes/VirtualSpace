const SET_MODELS = "SET-MODELS";

let initialState = {
    models: []
}

const modelsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODELS:
            return {
                ...state,
                models: action.models
            }
        default:
            return state;
    }
}

export const setModelsAC = (models) => ({ type: SET_MODELS, models })

export default modelsPageReducer;