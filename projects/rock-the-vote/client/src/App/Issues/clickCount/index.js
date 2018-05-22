import React, { Component } from "react";

import { connect } from "react-redux";
import { editIssue } from "../../../../redux/issues";

class ClickCount extends Component {

    render() {
        let { editIssue, voteCount, id } = this.props;
        return (
            <div className="clickCount">
                <button className="upButton" onClick={() => editIssue(id, { voteCount: Number(voteCount) + 1 })}> :) </button>
                {/* <p>Total Votes {totalVotes}</p> */}
                <p className="rating"> Rating {voteCount} </p>
                <button className="downButton" onClick={() => editIssue(id, { voteCount: Number(voteCount) - 1 })}>:(</button>
            </div>
        )
    }
}

export default connect(null, { editIssue })(ClickCount);
