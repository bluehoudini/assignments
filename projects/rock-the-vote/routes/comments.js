const express = require("express");
const commentRouter = express.Router();

const CommentModel = require("../models/comments.js");

commentRouter.route("/")
    .get((req, res) => {
        CommentModel.find(req.query, (err, foundComments) => {
            if (err) return res.send(err);
            res.status(200).send(foundComments);
        });
    })
    .post((req, res) => {
        const newComment = new CommentModel(req.body);
        newComment.save((err, savedComment) => {
            if (err) return res.send(err);
            res.status(201).send(savedComment);
        });
    })
    .delete((req, res) => {
        CommentModel.findOneAndRemove({ _id: req.params.id }, (err, deletedComment) => {
            if(err) return res.send(err); 
            if(!deletedComment) return res.status(404).send({ message: "Comment Not Found"})
            res.status(204).send(); 
        })
    })

    commentRouter.route("/:id")
    .get((req, res) => {
        CommentModel.findOne({ _id: req.params.id })
        //populate will show the id in full so it's the document associated with the id.
            .populate("commentId")

        // now execute query
            .exec((err, foundComment) => {
                if (err) return res.send(err); 
                if(!foundComment) return res.status(404).send({ message: "Comment Not Found" })
                res.status(200).send(foundComment)
            })
    })

    .delete((req, res) => {
        CommentModel.findOneAndRemove({ _id: req.params.id }, (err, deletedComment) => {
            if(err) return res.send(err); 
            if(!deletedComment) return res.status(404).send({ message: "Comment Not Found"})
            res.status(204).send(); 
        })
    })

    .put((req, res) => {
        CommentModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .populate("commentId")
            .exec((err, updatedComment) => {
                if (err) return res.send(err);
                if (!updatedComment) return res.status(404).send({ message: "Comment Not Found" });
                res.status(200).send(updatedComment);
            })
    })

module.exports = commentRouter;