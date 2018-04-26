import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


import LandingPage from "./LandingPage";
import Main from "./Main";
import SignUp from "./SignUp";
import WatchList from "./WatchList";


function App(props) {
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