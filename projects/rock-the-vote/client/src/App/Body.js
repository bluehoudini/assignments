import React from "react";
import ConArg from "./ConArg";
import ProArg from "./ProArg";
import Form from "./Form";

function Body() {
    return (
        <div className="Body">
            <h1>Pants Or No Pants</h1>
            <ProArg />
            <ConArg />
        </div>
    )
}

export default Body;