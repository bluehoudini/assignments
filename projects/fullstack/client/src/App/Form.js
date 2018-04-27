import React, { Component } from "react";

import { connect } from "react-redux";
import { getCards } from "../redux/cards";



class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                cardName: "",
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.getCards(this.state.inputs);
        this.setState(this.initialState);
    }
    render() {
        const { cardName } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="cardName" value={cardName} type="text" placeholder="Find Card" />
                {/* <input onChange={this.handleChange} name="caption" value={caption} type="text" placeholder="Enter Caption" /> */}
                <button>search</button>
            </form>
        )
    }
}

export default connect(null, { getCards })(Form);