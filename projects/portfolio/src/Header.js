import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <h1 className="nameTitle">Will Powers</h1>
            <h3 className="fullStackTitle">Full-Stack Web Developer</h3>
            <div className="upperLinks">
                <Link to="/">Main</Link>
                <Link to="/portfolio">What I've done</Link>
                <Link to="/contact">Contact me</Link>
            </div>
        </div>
    )
}

export default Header;