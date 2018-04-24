import React, { Component } from "react";

import { conect } from "react-redux";
//import action from 
//import {commentOnIssue} from redux/issue

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
        this.props.commentOnIssue(this.state.inputs);
        this.setState(this.initialState);
    }
    render() {
        const { comment } = this.state.inputs;
        return(
            <form onSubmit = {this.handleSubmit}>
                <input onChange = {this.handleChange} name="comment" value={comment} type="text" placeholder="Enter Comment Here" />
                <button>Submit</button>
            </form>
        )
    }
}

    export default Form;
    //export default connect(null, {commentOnIssue})(Form);