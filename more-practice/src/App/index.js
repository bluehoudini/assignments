import React from "react";
import Blog from "./Blog/"

function App(){
    // const {title, backgroundColor} = props;
    //  const style = {
    //      backgroundColor

    // }
    const title1 = {
        title:"title1",
        subtitle:"im a subtitle",
        info:"fvbhzskjcbjsd",
        backgroundColor: "red",
        fontFamily: "fantasy"
    }
    const title2 = {
        title:"title2",
        subtitle:"im a subtitle too",
        info:"gagsfea",
        backgroundColor:"olivedrab"
    }
    const title3 = {
        title:"title3",
        subtitle:"im a subtitle too",
        info:"gagsfea",
        backgroundColor: "grey"
    }
    const title4 = {
        title:"title4",
        subtitle:"im a subtitle too",
        info:"gagsfea",
        backgroundColor: "black"
    }
    const title5 = {
        title:"title5",
        subtitle:"im a subtitle too",
        info:"gagsfea",
        backgroundColor: "azure"
    }
    const title6 = {
        title:"title6",
        subtitle:"im a subtitle too",
        info:"gagsfea",
        backgroundColor: "yellow"
    }
    const title7 = {
        title:"title7",
        subtitle:"im a subtitle too",
        info:"gagsfea",
        backgroundColor: "maroon"
    }
    const title8 = {
        title:"title8",
        subtitle:"im a subtitle too",
        info:"gagsfea",
        backgroundColor: "lightcoral"
    }
    const title9 = {
        title:"title9",
        subtitle:"im a subtitle too",
        info:"gagsfea",
        backgroundColor: "lawngreen"
    }
    const title10 = {
        title:"title10",
        subtitle:"im a subtitle too",
        info:"gagsfea",
        backgroundColor: "lavender"
    }
    
    return(
       <div className = "container">
            <Blog {...title1} />
            <Blog {...title2}></Blog>
            <Blog {...title3}></Blog>
            <Blog {...title4}></Blog>
            <Blog {...title5}></Blog>
            <Blog {...title6}></Blog>
            <Blog {...title7}></Blog>
            <Blog {...title8}></Blog>
            <Blog {...title9}></Blog>
            <Blog {...title10}></Blog>
        </div>

        
        
    )
}
export default App;