import axios from "axios";

const initialState = {
    data: {},
    loading: true,
    errMsg: ""
}

const tacoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TACOS":
            return {
                ...state,
                data: action.tacos,
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

const tacoFancyUrl = "http://taco-randomizer.herokuapp.com/random/?full-taco=true";

export const getTacos = ()=>{
    return dispatch => {
        axios.get(tacoFancyUrl)
        .then(response => {
            dispatch({
                type: "GET_TACOS",
                tacos: response.data
            })
        })
        .catch(err =>{
            dispatch({
                type: "ERR_MSG",
                errMsg: "Lo ciento, no hay tacos. Adios."
            });
        });
    }
}

export default tacoReducer;
