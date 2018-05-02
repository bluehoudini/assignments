const express = require("express");

const cardRouter = express.Router();

const uuid = require("uuid");
const CardModel = require("../models/cardModels");

cardRouter.route("/")
    .get((req, res) => {
        CardModel.find(req.query, (err, foundCards) => {
            if (err) res.send(err);
            else
                res.status(200).send(foundCards)
        })
    })
    .post((req, res) => {
        const newCard = new CardModel(req.body);
        newCard.save((err, addedCard) => {
            if (err) return res.send(err);
            res.status(201).send(addedCard);
        })
    })

cardRouter.route("/:id")
    .get((req, res) => {
        CardModel.findOne({ _id: req.params.id },
            (err, foundCards) => {
                if (err) return res.send(err);
                if (!foundCards) return res.status(404).send({ message: "card not found" });
                res.status(200).send(foundCards)
            })
    })
    .delete((req, res) => {
        CardModel.findOneAndRemove({ cardId: req.params.id }, (err) => {
            if (err) return res.send(err);
            res.status(204).send();
        })
    });

module.exports = cardRouter;