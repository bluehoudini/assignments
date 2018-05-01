import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cardReducer from "./cards";

const store = createStore(combineReducers({ cards: cardReducer }), applyMiddleware(thunk));
store.subscribe(() => {
    console.log("store:")
    console.log(store.getState())
});
//create reducer

//define store





// global state contains two arrays:
// cards from MTG API
// cards from your own API (favorited cards)

// GET CARDS from database and MTG API
// GET ONE CARD from data base and MTG API
// POST CARD to database
// REMOVE CARD from favorites
export default store;