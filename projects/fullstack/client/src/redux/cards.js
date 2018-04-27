import axios from "axios";

const initialState = {
    data: [],
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
                data: action.cards,
                loading: false,
            }
        case "POST_CARD":
            return {
                ...state,
                data: action.cards,
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
const searchedCard = "pestilence"
const mtgApi = "https://api.scryfall.com/cards/named?fuzzy=" + searchedCard;

export const getCards = () => {
    return dispatch => {
        axios.get(mtgApi)
            .then(response => {
                dispatch({
                    type: "GET_CARDS",
                    cards: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "No cards found, sorry"
                })
            })
        // export const getOneCard = () => {
        //     return dispatch => {
        //         axios.get(mtgApi)
        //             .then(response => {
        //                 dispatch({
        //                     type: "GET_ONE_CARD",
        //                     cards: response.data
        //                 })
        //             })
        //             .catch(err => {
        //                 dispatch({
        //                     type: "ERR_MSG",
        //                     errMsg: "No cards found, sorry"
        //                 });
        //             });
    }
}

export default cardReducer;

