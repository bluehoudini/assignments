import React from "react";
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <div className="nav">
            <Link to="/">Main</Link>
            <Link to="/watch-list">Watch List</Link>
            <Link to="/sign-up">Sign Up</Link>
            
        </div>
    )
}

export default NavBar;