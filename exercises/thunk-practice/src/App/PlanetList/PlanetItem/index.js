import React from "react";

function PlanetItem(props) {
    const {name, diameter, climate} = props
    return (
        <div>
            <h1>{name}</h1>
            <p>diameter: {diameter}</p>
            <p>climate: {climate}</p>
        </div>
    )
}

export default PlanetItem;