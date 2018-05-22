import React, { Component } from "react";
import { removeIssue } from "../../../redux/issues"; 

import ClickCount from "./ClickCount"; 
import EditIssueFormDisplay from "../Issue/EditIssueForm"; 
import IssueCommentList from "../../IssuesList/Issue/IssueCommentList"; 
import CommentForm from "./IssueCommentList/CommentForm";

class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
            displayCommentForm: false
        }
    }

    toggleDisplay = () => {
        this.setState(prevState => ({ displayForm: !prevState.displayForm }));
    }

    toggleDisplayComment = () => {
        this.setState(prevState => ({ displayCommentForm: !prevState.displayCommentForm }));
    }

    render() {
        const { title, _id, description, removeIssue, voteCount } = this.props;

        return (
            <div className="issue" >
                <ClickCount voteCount={voteCount}id={_id}/>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="buttons">
                <button className="button" onClick={this.toggleDisplay} >Edit</button>
                {
                    this.state.displayForm ? < EditIssueFormDisplay toggleDisplay = {this.toggleDisplay}{...this.props}/> : null
                }
                <button className="button" onClick={() => removeIssue(_id)}>Delete</button>
                <button className="button" onClick={this.toggleDisplayComment}>Add Comment</button>
                {
                    this.state.displayCommentForm ? <CommentForm issueId={_id} toggleDisplayComment={this.toggleDisplayComment}{...this.props} /> : null
                }
                </div>
                <IssueCommentList issueId={_id} className="issueCommentList"></IssueCommentList>
            </div>
        )
    }
}
export default Issue; 