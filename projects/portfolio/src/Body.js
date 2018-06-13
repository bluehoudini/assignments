import React from "react";
import Doughnut from "./Doughnut"

function Body() {
    return (

        <div className="Body">
                <img className="myFace" src="https://pbs.twimg.com/profile_images/998600602702692352/rQswE_Q2_400x400.jpg" alt="myPicture" />
            <div className="aboutMe">Howdy, my name is Will Powers and I make things for the internet.
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