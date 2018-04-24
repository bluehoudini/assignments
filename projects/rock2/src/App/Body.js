import React from "react";
//display a counter to upvotes and downvotes
function Body() {
    return (
        <div>
            <div className="title">
                <h2>title</h2>
            </div>
            <description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos cumque optio. Commodi sint perferendis voluptates, doloribus officiis voluptate laboriosam quasi porro optio at magnam earum. Neque molestiae laborum placeat!</description>
            <div className="voteForm">
            <form>
                <input type="radio" id="upVote" name="choiceOne" 
                value="upVote"></input>
                <label for="upVote">upvote</label>
                <input type="radio" id="downVote" name="choiceOne" 
                value="downVote"></input>
                <label for="downVote">downvote</label>
                {/* <div className="comments">comments get put here</div>
                <button>post</button> */}
                {/* <input type="text"/> */}
            </form>
            </div>
            </div>
            )};
        
export default Body;
