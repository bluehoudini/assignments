import React from "react";

function NavBar(props) {
    return (
        <div className="nav">
            <Link to="/">Main</Link>
            <Link to="/watch-list">Watch List</Link>
            <Link to="/sign-up"></Link>
            
        </div>
    )
}

export default NavBar;