import React, { Component } from "react";
import EditIssueFormDisplay from "./EditIssueFormDisplay";

import { connect } from "react-redux";
import { editIssue } from "../../../../redux/issues";

class EditIssueForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                title: props.title || "",
                description: props.description || ""
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
        this.props.editIssue(this.props._id, this.state.inputs);
        this.props.toggleDisplay();
    }
    render() {
        const props = {
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            ...this.state
        }
        return (
            <EditIssueFormDisplay inputs={this.state.inputs} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default connect(null, { editIssue })(EditIssueForm);