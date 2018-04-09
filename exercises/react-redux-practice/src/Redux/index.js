// import React from "react"
import {createStore} from "redux";
// import {increment} from "../Redux"
export function increment(){
    return{
        type:"INCREMENT"
    }
}
export function decrement(){
    return{
        type:"DECREMENT"
    }
}
export function double(){
    return{
        type:"DOUBLE"
    }
}


function reducer(state=0, action) {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        
    switch(action.type){
        case "DECREMENT":
            return state - 1;
    }
    switch(action.type){
        case "DOUBLE":
            return state * 2
    }
        default:
            return state
    

}

export default createStore(reducer);