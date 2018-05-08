const express = require("express");
const port = process.env.PORT || 7777
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/votes";

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client", "build")))


app.use
mongoose.connect(db, (err) =>{
    if(err) console.error(err);
    console.log("connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port" + port));
