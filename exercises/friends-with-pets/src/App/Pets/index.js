import React from "react";

function Pets(props){
    const {name, breed} = props;
    return(
       <div>
        <h3>
            {name}
            
        </h3>
        <h4>
            {breed}
        </h4>
        </div>
    )
}
export default Pets;