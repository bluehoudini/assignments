import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import tacoReducer from "./tacos";

const store = createStore(combineReducers({tacos: tacoReducer}), applyMiddleware(thunk));

// store.subscribe(()=> console.log(store.getState()));

export default store;