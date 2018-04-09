import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import planetReducer from "./planets";

const store = createStore(combineReducers({planets: planetReducer}), applyMiddleware(thunk));

store.subscribe()

export default store;