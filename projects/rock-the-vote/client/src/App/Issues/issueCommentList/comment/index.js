import React, { Component } from "react";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
        }
    }

    toggleDisplay = () => {
        this.setState(prevState => ({ displayForm: !prevState.displayForm }));
    }

    render() {
        const { name, comment, removeComment, _id } = this.props;
        return (
            <div className="comment" >
                <h4>{name}</h4>
                <p>{comment}</p>
                <div className="commentButton">
                    <button className="button" onClick={() => removeComment(_id)}>Delete</button>
                </div>
            </div>
        )
    }
}
export default Comment; 