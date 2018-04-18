import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

axios.get("/bounties.js");

ReactDOM.render(<App />, document.getElementById("root"));

