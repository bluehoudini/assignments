const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js")
const catRouter = require("./routes/cats.js");
const agencyRouter = require("./routes/agencies.js")

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
app.use("/agencies", agencyRouter);

mongoose.connect("mongodb://localhost:27017/cats", (err) =>{
    if(err) console.error(err);
    console.log("connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port" + port));

