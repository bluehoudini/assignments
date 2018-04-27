const express = require("express");
const port = process.env.PORT || 8000
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const cardRouter = require("./routes/cards");
// const userRouter = require("./routes/user");

const app = express();
// const port = 8080;

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/cards", cardRouter);
// app.use("user", userRouter);

mongoose.connect("mongodb://localhost:27017/user", (err) => {
    if(err) console.log(err);
    console.log("connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port" + port));