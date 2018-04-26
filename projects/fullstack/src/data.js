const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cardRouter = require("./routes/cards");

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use("/watched_cards", cardRouter)

mongoose.connect("mongodb://localhost:27017/watched_cards", (err) => {
    if(err) console.log(err);
    console.log("connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port" + port));