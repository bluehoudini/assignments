import React from "react"; 

function AddIssueFormDisplay(props) {
    const { handleChange, handleSubmit, inputs } = props; 
    const { title, description } = inputs; 
    return (
        <div className="display" >
            <div className="formDisplay">
            <p>Add a current issue to our Forum for comments and feedback below!</p>
            <form className="addForm"onSubmit={handleSubmit}>
                <input className="addInput" name="title" onChange={handleChange} value={title} type="text" placeholder="Enter Issue"/>
                <input className="addInput" name="description" onChange={handleChange} value={description} type="text" placeholder="Enter Description" />
                <button className="addInput" >Submit</button>
            </form>
            </div>
        </div>
    )
}

export default AddIssueFormDisplay; 