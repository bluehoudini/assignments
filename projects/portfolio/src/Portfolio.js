import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";

function Portfolio() {
    return (
        <div className="Portfolio">
            <FadeIn>
                <div className="projectDescription">
                    <h1 className="projectTitle">Bazaar Trader MTG</h1>
                    <p>- <span className="boldFont">Bazaar Trader MTG</span> is a full-stack CRUD application used for tracking the price of Magic the Gathering cards.</p>
                    <p>- Pulls data from the <span className="boldFont">Scryfall API</span> to ensure accurate prices that are updated daily</p>
                    <p>- Utilizes <span className="boldFont">CSS Grid</span> and <span className="boldFont">ReactJS</span> directives to create a clean fron-end experience.</p>
                    <p>- Built a <span className="boldFont">RESTful API</span> in <span className="boldFont">Node.js</span> and <span className="boldFont">Express</span> providing endpoints for post CRUD functionality</p>
                </div>
            </FadeIn>

            <a className="bazaarLink" href="https://bazaartrader.herokuapp.com/"><img className="bazaarLink" src="https://preview.ibb.co/cqQHm7/bazaar.png" alt="bazaar" border="0"></img></a>
        </div>

    )
}

export default Portfolio;