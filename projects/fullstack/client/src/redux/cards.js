import axios from "axios";
import uuid from "uuid";

const initialState = {
    data: [],
    favoriteIds: [],
    favoriteCards: [],
    loading: true,
    errMsg: ""
}
//add to favoriteIds

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
                favoriteIds: [...state.favoriteIds, action.card],
                loading: false,
            }
        case "REMOVE_ONE_CARD":
            return {
                ...state,
                favoriteCards: state.favoriteCards.filter(card => card.id !== action.id),
                favoriteIds: state.favoriteIds.filter(id => id.cardId !== action.id),
                loading: false,
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        // case "ADD_TO_WATCHLIST":
        //     return {
        //         ...state,
        //         favoriteIds: [...state.favoriteIds, action.id],
        //         loading: false
        //     }
        case "GET_FAVORITES_IDS":
            return {
                ...state,
                favoriteIds: action.ids
            }
        case "GET_FAVORITES":
            return {
                ...state,
                favoriteCards: action.cards
            }

        default:
            return state;
    }
}
//change searchedCard to whatever was inputted
// const searchedCard = "pestilence"
const mtgSearchApi = "https://api.scryfall.com/cards/search?";
const mtgCardApi = "https://api.scryfall.com/cards";
const willsApi = "/cards/"

export const getCards = (cardName) => {
    return dispatch => {
        axios.get(`${mtgSearchApi}q=${cardName}`)
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
        axios.get(mtgSearchApi)
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

export const getFavorites = () => {
    // once database is saving list of favorites, first GET that list of favorites (IDs)
    // THEN, do a GET request to the skryfall API for every one of those cards by its ID


    return dispatch => {
        axios.get(willsApi)
            .then(response => {
                dispatch({
                    type: "GET_FAVORITES_IDS",
                    ids: response.data
                })

                const promises = response.data.map(favObj => axios.get(mtgCardApi + "/" + favObj.cardId));

                Promise.all(promises)
                    .then(responses => {
                        const favCards = responses.map(response => response.data)
                        dispatch({
                            type: "GET_FAVORITES",
                            cards: favCards
                        })
                    })
                // 
                // const promises = mtgCardApi.map(favId => axios.get(`${mtgCardApi}/${favId}`));
                // Promise.all(promises)
                //     .then(responses => {
                //         const favCards = responses.map(response => response.data)
                //         dispatch({
                //             type: "GET_FAVORITES",
                //             cards: favCards
                //         })
            });
    }
}

// export const postCard = (favCard) => {
//     return dispatch => {
//         axios.post(willsApi, {cardId: favCard})
//             .then(response => {
//                 dispatch({
//                     type: "POST_CARD",
//                     cards: response.data
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "ERR_MSG",
//                     errMsg: "No cards found, sorry"
//                 })
//             })
//     }
// }

export const removeOneCard = (deleteID) => {
    return dispatch => {
        axios.delete(willsApi + deleteID)
            .then(response => {
                dispatch({
                    type: "REMOVE_ONE_CARD",
                    id: deleteID
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
export const addToWatchlist = (favCard) => {
    return dispatch => {
        axios.post(willsApi, { cardId: favCard })
            .then(response => {
                dispatch({
                    type: "POST_CARD",
                    card: response.data
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

