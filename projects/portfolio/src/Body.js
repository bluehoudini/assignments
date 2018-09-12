import React from "react";
import Doughnut from "./Doughnut"
import FadeIn from "react-fade-in";

function Body() {
    return (

        <div className="Body">
            <FadeIn>
                <img className="myFace" src="https://pbs.twimg.com/profile_images/998600602702692352/rQswE_Q2_400x400.jpg" alt="myPicture" />
            </FadeIn>
            <FadeIn>
            <div className="aboutMe">Heyo, I'm <span className="boldFont">Will Powers</span> a <span className="boldFont">UX Developer</span> based in Salt Lake City, UT. 
            </div>
            <div className="skillz">
                <h2>My Skills</h2>
                Javascript, UX/UI Node.js, React, MongoDB, Express, HTML, CSS
                <h2 className="strengths">My Strengths</h2>
            </div>
            </FadeIn>
            <div className="doughnutTest">
                <Doughnut></Doughnut>
            </div>
        </div>
    )
}

export default Body;