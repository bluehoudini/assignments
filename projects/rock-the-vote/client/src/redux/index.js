import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import argumentReducer from "./arguments"

const store = createStore(combineReducers({ argument: argumentReducer}));

store.subscribe(()=>{
    console.log(store.getState());
})

export default store;