import axios from "axios";

const initialState = {
    data: [],
    upVotes: [],
    argument: [],
    loading: true,
    errMsg:""
}

const argumentReducer = (state = initialState, action) => {
    switch (action.type){
        case "GET_ARGUMENTS":
            return {
                ...state,
                data: action.argument,
                loading: false,
            }
        case "ADD_ARGUMENT":
            return {
                ...state,
                argument: [...state.argument, action.argument],
                loading: false,
            }   
        case "REMOVE_ARGUMENT":
            return{
                data: [...state.data.filter((argument, i)=> i !== action.index)]
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state
    }
}
export const addArgument = argument =>{
    return {
        type: "ADD_ARGUMENT",
        argument
    }
}
export const removeArgument = index =>{
    return{
        type: "REMOVE_ARGUMENT",
        index,
    }
}
export default argumentReducer;