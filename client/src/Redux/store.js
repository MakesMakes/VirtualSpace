import {createStore, combineReducers, applyMiddleware} from 'redux'
import detailsPageReducer from './detailsPage_Reducer';
import modelPageReducer from './modelPage_Reducer';
import modelsPageReducer from './modelsPage_Reducer'
import detailPageReducer from './detailPage_Reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import registerReducer from './registerPage_Reducer';
import loginReducer from './loginPage_Reducer';

let reducers = combineReducers({
    modelsPage: modelsPageReducer,
    modelPage: modelPageReducer,
    detailsPage: detailsPageReducer,
    detailPage: detailPageReducer,
    register: registerReducer,
    login: loginReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;

