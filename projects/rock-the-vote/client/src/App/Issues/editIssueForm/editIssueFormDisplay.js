import React from "react"; 

function EditIssueFormDisplay(props) {
    const { inputs, handleChange, handleSubmit } = props;
    const { title, description } = inputs; 
    return (
        <div >
            <form className="editForm" onSubmit={handleSubmit}>
                <p>Title:</p>
                <input className="editInput" type="text" onChange={handleChange} name="title" value={title} placeholder="New Title"/>
                <p> Description: </p>
                <input className="editInput" type="text" name="description" onChange={handleChange} value={description} placeholder="New Description"/>
                <button className="editInput">Submit</button>
            </form>
        </div>
    )
}

export default EditIssueFormDisplay; 