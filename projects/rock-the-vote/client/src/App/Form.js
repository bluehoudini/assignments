import React, { Component } from "react";
import { connect } from "react-redux";
import { addArgument } from "../redux/arguments";


class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                comment: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.hanleSubmit = this.hanleSubmit.bind(this);
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
        this.props.addArgument(this.state.inputs);
        this.setState(this.initialState);
    }
    render(){
        const { comment } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="comment" value={comment} type="text" placeholder="Write your comments here" />
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null, {addArgument})(Form);