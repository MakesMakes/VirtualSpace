import {createStore, combineReducers} from 'redux'
import detailsPageReducer from './detailsPage_Reducer';
import modelPageReducer from './modelPage_Reducer';
import modelsPageReducer from './modelsPage_Reducer'
import detailPageReducer from './detailPage_Reducer';


let reducers = combineReducers({
    modelsPage: modelsPageReducer,
    modelPage: modelPageReducer,
    detailsPage: detailsPageReducer,
    detailPage: detailPageReducer
});

let store = createStore(reducers);

export default store;
