import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <div className="nav">
            <Link to="/">Main</Link>
            <Link to="/gen-taco">Tacos!!!</Link>
            <Link to="/about">About</Link>

        </div>
    )
}

export default NavBar;