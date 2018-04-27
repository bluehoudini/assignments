import axios from "axios";

const initialState = {
    data: {},
    loading:true,
    errMsg:""
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CARDS":
            return {
                ...state,
                data:action.cards,
                loading: false,
            }
        case "ERR_MSG":
        return {
            ...state,
            loading:false,
            errMsg: action.errMsg
        }
        default:
            return state;
    }
}
    const mtgApi = ""

    