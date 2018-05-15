import React from "react";
import ConArg from "./ConArg";
import ProArg from "./ProArg";

function Body() {
    return (
        <div className="Body">
            <h1>Pants Or No Pants</h1>
            <proSide><ProArg /></proSide>
            <conSide><ConArg /></conSide>
        </div>
    )
}

export default Body;