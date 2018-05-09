const express = require("express");
const issueRoute = express.Router();

const uuid = require("uuid");
const IssueModel = require("../models/issueModel");

issueRoute.route("/")
    .get((req, res) => {
        IssueModel.find(req.query)
            .exec((err, foundIssue) => {
                if (err) {
                    res.status(400).send(err)
                } else if (foundIssue) {
                    res.status(200).send(foundIssue)
                } else {
                    res.status(404).send("Issue not found")
                }
            })
    })
    .post((req, res) => {
        const newData = new IssueModel(req.body)
        newData.save((err, addedData) => err ? res.status(400).send(err) : res.status(201).send(addedData))
    })
    issueRoute.route("/:id")
        .get((req, res)=>{
            IssueModel.findOne({ _id: req.params.id})
            .exec((err, foundIssue)=>{
                if (err){
                    res.status(400).send(err)
                } else if (foundIssue) {
                    res.status(200).send(foundIssue)
                } else {
                    res.status(400).send("Issue not found")
                }
            })
        })
        .delete((req, res)=>{
            IssueModel.findOneAndRemove({ _id: req.params.id})
                .exec(((err, delIssue)=>{
                    if (err) {
                        res.status(400).send(err)
                    } else if (delIssue){
                        res.status(204).send()
                    } else {
                        res.status(404).send("404 --- Isseue not found")
                    }
                }))
        })
        .put((req, res)=>{
            IssueModel.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true})
            exec(((err, updateIssue)=>{
                if (err) {
                    res.status(400).send(err)
                } else if (updateIssue) {
                    res.status(200).send(updateIssue)
                } else {
                    res.status(404).send("404 --- Issue not found")
                }
            }))
        })

module.exports = issueRoute