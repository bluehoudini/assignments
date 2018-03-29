import React, { Component } from "react";
class Counter extends Component {
    constructor(props) {
        //this is where you define static properties
        super(props);
        this.state = {
            counter: 0
        };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.resetState = this.resetState.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.squareState = this.squareState.bind(this);
    }

    incrementCounter() {
        //tell react what the new state should look like
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        });
    }
    resetState() {
        this.setState({counter: 0})
            
    }
    decrementCounter(){
        this.setState(prevState => {
            return{
                counter: prevState.counter -1
            }
        });
    }
    squareState(){
        this.setState(prevState =>{
            return{
                counter: prevState.counter * prevState.counter
            }
        });
    }
    //dont do this!!!
    //this.state.counter = 1;
    //this are defines methods
    render() {
        const { counter } = this.state;
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={this.incrementCounter}>+1</button>
                <button onClick={this.resetState}>reset</button>
                <button onClick={this.decrementCounter}>-1</button>
            </div>
        )
    }
}


// function counter() {
//     return (
//         <div>

//         </div>
//     )
// }



// function App() {
//     return (
//         <div>
//            <Counter></Counter>
//         </div>
//     )
// }

export default Counter;