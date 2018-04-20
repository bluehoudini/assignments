const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let bounties = require("./bounties");
const port = 4040;

app.use(bodyParser.json());

app.route("/bounties").get((req, res) => {
    res.status(200).send(bounties);
})

    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        console.log(req.body)
        bounties.push(newBounty);
        res.status(201).send(newBounty);
    });

app.route("./bounties/:id")
    .get((req, res) => {
        const { id } = req.params;
        const foundBounty = bounties.filter(todo => todo._id === id)[0];
        res.status(200).send(foundBounty);
    })

    .delete((req, res) => {
        const { id } = req.params;
        bounties = bounties.filter(bounty => bounty._id !== id)
        res.status(204).send();
    })

    .put((req, res) => {
        const { id } = req.params;
        let editBounty = req.body
        bounties = bounties.map(bounty => bounty._id === id ? editedBounty = { ...bounty, ...editedBounty } : bounty);
        res.status(200).send(editedBounty);
    })

app.listen(port, () => console.log("server running on port" + port));