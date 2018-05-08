const express = require("express");
const port = process.env.PORT || 8080
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const issueRouter = require("./routes/issues")

const app = express();
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/user";

app.use(bosyParser.json());
app.use(morgan("rock"));
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/issues", issueRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose.connect(db, (err) => {
    if(!err)
    console.log("connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port" + port));