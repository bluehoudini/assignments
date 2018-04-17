const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let todos = require("./todos.js");
const port = 8089;

app.use(bodyParser.json());

app.route("/todos").get((req, res) => {
    res.status(200).send(todos);
})

.post((req, res) => {
    const newTodo = req.body;
    newTodo._id = uuid();
    console.log(req.body)
    todos.push(newTodo);
    res.status(201).send(newTodo);
});

app.route("/todos/:id")
    .get((req, res) => {
        const { id } = req.params;
        const foundTodo = todos.filter(todo => todo._id === id)[0];
        res.status(200).send(foundTodo);
    })

    .post((req, res) => {
        const newTodo = req.body;
        newTodo._id = uuid();
        console.log(req.body)
        todos.push(newTodo);
        res.status(201).send(newTodo);
    });

    app.route("/todos/:id")
        .get((req, res) => {
            const { id } = req.params;
            const foundTodo = todos.filter(todo => todo._id === id)[0];
            res.status(200).send(foundTodo);
        })

        .delete((req, res) => {
            const { id } = req.params;
            todo = todos.filter(todo => todo._id !== id)
            res.status(204).send();
        })

        .put((req, res) => {
            const { id } = req.params;
            let editTodo = req.body
            todos = todos.map(todo => todo._id === id ? editedTodo = {...todo, ...editedTodo} : todo);
            res.status(200).send(editedTodo);
        })

app.listen(port, () => console.log("server running on port" + port));


