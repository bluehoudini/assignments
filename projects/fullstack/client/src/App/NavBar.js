import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <div className="nav">
            <div className="pseudoDiv1"></div>
            <div className="spacingTest">
            <Link to="/">Main</Link>
            <Link to="/watch-list">Watch List</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/sign-in">Sign In</Link>
            </div>
            <div className="pseudoDiv2"></div>

        </div>
    )
}

export default NavBar;