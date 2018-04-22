const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 7777;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/votes", (err) =>{
    if(err) console.error(err);
    console.log("connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port" + port));