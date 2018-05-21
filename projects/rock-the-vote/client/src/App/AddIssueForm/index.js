import React, { Component } from "react";
import AddIssueFormDisplay from "./AddIssueFormDisplay";

import { connect } from "react-redux";
import { addIssue } from "../../redux/issues";

class AddIssueForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                title: "",
                description: ""
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
        event.preventDefault();
        this.props.addIssue(this.state.inputs)
        this.setState(this.initialState);
    }
    render() {
        const props = {
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            ...this.state
        }
        return (
            <AddIssueFormDisplay {...props} />
        )
    }
}

export default connect(null, { addIssue })(AddIssueForm);