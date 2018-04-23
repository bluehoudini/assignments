import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const store = createStore(combineReducers)

export default store;