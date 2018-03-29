import React from "react";


function Blog(props) {

    const { title, subtitle, info, backgroundColor, cl, fontFamily} = props;
    const divStyling = { backgroundColor: backgroundColor, fontFamily: fontFamily}
    return (
        <div className={cl} style={divStyling}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{info}</p>
        </div>
    )
}
export default Blog;