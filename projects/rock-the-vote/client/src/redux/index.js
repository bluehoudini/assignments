import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import issueReducer from "./issues";
import commentReducer from "../"; 

const globalState = {
    issues: issueReducer, 
    comments: commentReducer
};

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;