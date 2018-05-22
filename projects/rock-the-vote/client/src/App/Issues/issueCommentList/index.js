import React, { Component } from "react";

import { connect } from "react-redux";
import { getComments, removeComment } from "../../../../redux/comments";

import Comment from "./Comment";

class IssueCommentList extends Component {
    componentDidMount() {
        this.props.getComments();
    }

    render() {
        const { data, loading, errMsg, removeComment, getComments } = this.props;
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            const commentComponents = data
                .filter(comment => comment.issueId.includes(this.props.issueId))
                .map((comment, i) => <Comment key={comment._id} getComments={getComments} data={data} removeComment={removeComment}{...comment}></Comment>)
            return (
                <div className="comments">
                    {commentComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.comments;
}

export default connect(mapStateToProps, { getComments, removeComment })(IssueCommentList);