import { createStore, combineReducers } from "redux";

import issueReducer from "./issue";

const store = createStore(combineReducers({ issues: issueReducer }));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;