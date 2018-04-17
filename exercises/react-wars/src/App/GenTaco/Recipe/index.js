import React from "react";

function Recipe(props) {
    console.log(props)
    const { name, recipe } = props
    return (
        <div className="recipe">
            <h2>{name}</h2>
            <p>{recipe}</p>
        </div>
    )
}

export default Recipe;
