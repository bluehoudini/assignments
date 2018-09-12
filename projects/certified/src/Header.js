import React from "react";

function Header(props) {
    return (
        <div className="Header"><p className="title">Certified Human</p>
            <div className="links">
                <a href="http://google.com">home</a>
                <a href="http://google.com">archives</a>
                <a href="http://google.com">about</a>
            </div>
        </div>
    )
}

export default Header;