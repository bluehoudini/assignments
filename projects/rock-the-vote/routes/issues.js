const express = require("express");
const issueRouter = express.Router();

const IssueModel = require("../models/issueModel");
const CommentModel = require("../models/comments.js");

issueRouter.route("/")
    .get((req, res) => {
        IssueModel.find(req.query)
            .populate("commentId")
            .exec((err, foundIssues) => {
                if (err) return res.send(err);
                res.status(200).send(foundIssues)
            });
    })
    .post((req, res) => {
        const newIssue = new IssueModel(req.body);
        newIssue.save((err, savedIssue) => {
            if (err) return res.send(err);
            IssueModel.populate(savedIssue, { path: "commentId" }, (err, popIssue) => {
                if (err) return res.send(err);
                res.status(201).send(popIssue)
            });
        });
    });

issueRouter.route("/:id")
    .get((req, res) => {
        IssueModel.findOne({ _id: req.params.id })
            //populate will show the id in full so it's the document associated with the id.
            .populate("commentId")

            // now execute query
            .exec((err, foundIssue) => {
                if (err) return res.send(err);
                if (!foundIssue) return res.status(404).send({ message: "Issue Not Found" })
                res.status(200).send(foundIssue)
            })
    })

    .delete((req, res) => {
        IssueModel.findOneAndRemove({ _id: req.params.id }, (err, deletedIssue) => {
            if (err) return res.send(err);
            if (!deletedIssue) return res.status(404).send({ message: "Issue Not Found" })
            res.status(204).send();
        })
    })

    .put((req, res) => {
        console.log(req.body)
        IssueModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .populate("commentId")
            .exec((err, updatedIssue) => {
                if (err) return res.send(err);
                if (!updatedIssue) return res.status(404).send({ message: "Issue Not Found" });
                res.status(200).send(updatedIssue);
            })
    })

module.exports = issueRouter;