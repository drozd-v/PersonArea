import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducer from './reducers/authReducer';
import saga from './saga'
import createSagaMiddleware from 'redux-saga';
import contactReducer from "./reducers/contactReduser";

const reducer = combineReducers({
    auth: authReducer,
    contact: contactReducer
});

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga)
export default store;   