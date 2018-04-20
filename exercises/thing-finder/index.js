const express = require("express");
const uuid = require ("uuid");
const bodyParser = require("body-parser");
const fruitRouter = express.Router();

const app = express();
let fruits = require("./fruits");
const port = 7070;

app.use(bodyParser.json());

app.route("/fruit").get((req, res) => {
    console.log(req.query)
    res.status(200).send(fruits);
})

fruitRouter.route("/")
    .get((req, res) => {
        const {query} = req;
        const queriedFruit = fruit.filter(fruit => {
            for (let key in query) {
                if (!fruit.hasOwnProperty(key) || String(fruit[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        })
        res.status(200).send(queriedFruit);
    })

.post((req, res) => {
    const newFruit = req.body;
    newFruit._id = uuid();
    console.log(req.body)
    fruit.push(newFruit);
    res.status(201).send(newFruit);
});

app.route("/fruit/:id")
.get((req, res) => {
    const {id} = req.params;
    const foundFruit = fruit.filter(todo => todo._id ===id)[0];
    res.status(200).send(foundFruit);
})

app.listen(port, () => console.log("server running on port" + port));