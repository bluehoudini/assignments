import React from "react";
import Form from "./Form"


function Main(props) {
    return (
        <div className="main">
            <p className="intro">The mtg card price tracker<br/>you've been looking for</p>
            <p className="searchHere">Search here to look up a card</p>
            <Form></Form>
            {/* <p className="moreInfo">Search from among the entire magic the gathering library to find the </p> */}
        </div>
    )
}

export default Main;