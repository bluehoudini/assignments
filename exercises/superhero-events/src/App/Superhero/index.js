import React from "react";

function Superhero(props) {
    console.log(props)
    const { handleClick, name, catchphrase, img } = props
    return (
        <div>
            <h1 onClick={() => handleClick(catchphrase)}>
                name: {name}
            </h1>
            <img src={img} alt="" />
        </div>
    )
}
export default Superhero;
