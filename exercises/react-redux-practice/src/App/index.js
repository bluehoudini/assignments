import React from "react";
import { connect } from "react-redux";
import {increment} from "../Redux";
import {decrement} from "../Redux";
import {double} from "../Redux";

function App(props) {
    return (
        <div className="app">
            <button onClick={props.decrement}>-</button>
            <h1>{props.counter}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.double}>double</button>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        counter: state
    }
}
export default connect(mapStateToProps, {increment, decrement, double})(App);