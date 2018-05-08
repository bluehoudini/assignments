import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function App() {
    return (
        <div>
            <div className="container">
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default App;