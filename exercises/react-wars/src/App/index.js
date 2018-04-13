import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

import Main from "./Main";
import GenTaco from "./GenTaco";
import About from "./About";




function App(props) {
    // console.log("Main")
    return (
        <div>
            <div className="container">
                <Header></Header>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/gen-taco" component={GenTaco} />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default App;