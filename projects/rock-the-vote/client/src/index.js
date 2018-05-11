import React from "react";
import ReactDOM from "react-dom";

import App from "./App"
import { BrowserRouter as Router} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/";
import "./styles.css/";

ReactDOM.render(<App />, document.getElementById("root"));
