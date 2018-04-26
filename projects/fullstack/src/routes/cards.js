const express = require("express");

const cardRouter = express.Router();

const uuid = require("uuid");
const CardModel = require("../models/cardModels");

cardRouter.route("/")
    .get((req, res) => {
        CardModel.find
    })