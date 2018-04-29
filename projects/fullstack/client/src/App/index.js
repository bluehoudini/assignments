import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";


import NavBar from "./NavBar";
import Main from "./Main";
import SignUp from "./SignUp";
import WatchList from "./WatchList";
import SignIn from "./SignIn";
// import Form from "./Form";

function App(props) {
    return (
        <div>
            <div className="container">
                <Header></Header>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/watch-list" component={WatchList} />
                </Switch>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default App;