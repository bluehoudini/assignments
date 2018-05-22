import React from "react"; 

function CommentFormDisplay(props) {
    const { handleChange, handleSubmit, inputs } = props; 
    const { name, comment} = inputs; 
    return (
        <div>
            <form className="commentForm" onSubmit={handleSubmit}>
                <p>Name:</p>
                <input className="editInput" name="name" onChange={handleChange} value={name} type="text" placeholder="Enter Name"/>
                {/* {name.length ? <p>Thank you for helping us build our talent database!</p> : <p> Artist name is required!</p>} */}
                <p>Comment:</p>
                <input name="comment" className="editInput" onChange={handleChange} value={comment} type="text" placeholder="Enter Comment" />
                <br/>
                <div className="commentButton">
                    <button className="editInput" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CommentFormDisplay; 