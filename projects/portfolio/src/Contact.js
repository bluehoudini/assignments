import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";

function Contact() {
    return (
        <div className="Contact">
            <FadeIn>
            <h2>Git In Touch</h2>
            <p>For any inquiries, or if you just want to say hi, email me at <a href="https://freewillpowers87@gmail.com"><span className="bold">freewillpowers87@gmail.com</span></a></p>
            <iconContainer className="iconContainer">
            <h2>Find Me On Social Media</h2>
            <a href="https://github.com/bluehoudini"><img className="iconPic" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" /></a>
            <a href="https://twitter.com/freewillpowers"><img className="iconPic"src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" alt=""/></a>
            <a href="https://www.linkedin.com/in/willpowers1/"><img className="iconPic" src="https://png.icons8.com/metro/1600/linkedin.png" alt=""/> </a>
            </iconContainer>
            </FadeIn>
        </div>
    )
}

export default Contact;