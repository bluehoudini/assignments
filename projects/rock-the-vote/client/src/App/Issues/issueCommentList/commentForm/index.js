import React, { Component } from "react";
import CommentFormDisplay from "./CommentFormDiplay";

import { connect } from "react-redux";
import { addComment } from "../../../../../redux/comments";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                comment: ""
            },
        }
        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }
    handleSubmit(event) {
        event.persist();
        event.preventDefault();
        this.props.addComment({...this.state.inputs, issueId: this.props.issueId})
        this.setState(this.initialState);
        this.props.toggleDisplayComment();
    }
    
    render() {
        const props = {
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            ...this.state
        }
        return (
            <CommentFormDisplay inputs={this.state.inputs} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

        )
    }
}

export default connect(null, { addComment })(CommentForm);