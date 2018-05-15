import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import ConArg from "./ConArg";
import ProArg from "./ProArg";
import conForm from "./conForm";
import proForm from "./proForm";

function App() {
    return (
        <div>
            <div className="container">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
            </div>
        </div>
    )
}

export default App;