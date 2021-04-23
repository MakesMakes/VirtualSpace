const SET_DETAIL = "SET-DETAIL";
const OPEN_INFO = "OPEN_INFO";
const SET_INFO = "SET_INFO";
const CLOSE_INFO = "CLOSE_INFO";

let initialState = {
    detail: [],
    modal: false
}

const detailPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DETAIL:
            return {
                ...state,
                detail: action.detail
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

export const setDetailAC = (detail) => ({ type: SET_DETAIL, detail })
export const openInfoAC = () => ({ type: OPEN_INFO, payload: true })
export const setInfoAC = (info) => ({ type: SET_INFO, info })
export const closeInfoAC = () => ({ type: CLOSE_INFO, payload: false })

export default detailPageReducer;