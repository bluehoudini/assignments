import React from "react";
import Doughnut from "./Doughnut"

function Body() {
    return (

        <div className="Body">
            <div className="aboutMe">Hello, my name is Will Powers and I make things for the internet.
            </div>
            <div className="skillz">
                <h2>My Skills</h2>
                Javascript, Node.js, React, MongoDB, Express, HTML, CSS, UX/UI
                <h2 className="strengths">My Strengths</h2>
            </div>
            <div className="doughnutTest">
                <Doughnut></Doughnut>
            </div>
        </div>
    )
}

export default Body;