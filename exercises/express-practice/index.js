const express = require("express");
const bodyParser = require("body-parser");

const logger = require("./middleware/logger.js")
const catRouter = require("./catData");

const app = express();
// let cats = require("./catData.js");
const port = 8080;

//middleware
app.use(bodyParser.json());
app.use(logger)


//routes
//outsource the 'cat' routes to the cats.js
//import them into this file, and when a request is made to the /cats endpoint, rout the request/response objects to them

app.use("/cats", catRouter)

app.listen(port, () => console.log("Server running on port" + port));

