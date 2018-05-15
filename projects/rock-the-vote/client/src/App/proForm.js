import React from "react";

function proForm(props) {
    return (
         <div className="proForm">
            <form onSubmit={props.handleSubmit}>
                <h3>Sign Up</h3>
                <input onChange={props.handleChange}
                    value={props.name}
                    name="name"
                    type="text"
                    placeholder="Comment here" />
                    </form>
                    </div>
                    
    )
}


export default proForm;