const express = require("express");
const uuid = require ("uuid");
const bodyParser = require("body-parser");

const app = express();
let fruits = require("./fruits");
const port = 7070;

app.use(bodyParser.json());

app.route("/fruits.js").get((req, res) => {
    res.status(200).send(fruits);
})

.post((req, res) => {
    const newFruit = req.body;
    newFruit._id = uuid();
    console.log(req.body)
    fruits.push(newFruit);
    res.status(201).send(newFruit);
});

app.route("/fruits/:id")
.get((req, res) => {
    const {id} = req.params;
    const foundFruit = fruits.filter(todo => todo._id ===id)[0];
    res.status(200).send(foundFruit);
})

app.listen(port, () => console.log("server running on port" + port));