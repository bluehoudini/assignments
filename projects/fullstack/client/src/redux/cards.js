import axios from "axios";

const initialState = {
    data: [],
    favorites: [],
    loading: true,
    errMsg: ""
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CARDS":
            return {
                ...state,
                data: action.cards,
                loading: false,
            }
        case "GET_ONE_CARD":
            return {
                ...state,
                loading: false,
                data: state.data.map(cards => {
                    if (cards.name === action.name) {
                        return action.cards;
                    } else {
                        return cards;
                    }
                })
            }

        case "POST_CARD":
            return {
                ...state,
                favorites: [...state.favorites, action.card],
                loading: false,
            }
        case "REMOVE_ONE_CARD":
            return {
                ...state,
                data: action.cards,
                loading: false,
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state;
    }
}
//change searchedCard to whatever was inputted
// const searchedCard = "pestilence"
const mtgApi = "https://api.scryfall.com/cards/search?";
const willsApi = "http://localhost:8000/cards?"

export const getCards = (cardName) => {
    return dispatch => {
        axios.get(`${mtgApi}q=${cardName}`)
            .then(response => {
                dispatch({
                    type: "GET_CARDS",
                    cards: response.data.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "No cards found, sorry"
                })
            })
    }
}
export const getOneCard = () => {
    return dispatch => {
        axios.get(mtgApi)
            .then(response => {
                dispatch({
                    type: "GET_ONE_CARD",
                    cards: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "No cards found, sorry"
                })
            })
    }
}
export const postCard = () => {
    return dispatch => {
        axios.post(willsApi)
            .then(response => {
                dispatch({
                    type: "POST_CARD",
                    cards: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "No cards found, sorry"
                })
            })
    }
}
export const removeOneCard = () => {
    return dispatch => {
        axios.get(willsApi)
            .then(response => {
                dispatch({
                    type: "REMOVE_ONE_CARD",
                    cards: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "No cards found, sorry"
                })
            })
    }
}

export default cardReducer;

