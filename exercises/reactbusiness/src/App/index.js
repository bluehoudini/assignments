import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Nav from "./Nav";



function App() {
    return (
        <div> 
            <Nav></Nav>
            <Header></Header>
        <div className="container">
            <Content></Content>
        </div>
            <Footer></Footer>
        </div>
    )

}

export default App;