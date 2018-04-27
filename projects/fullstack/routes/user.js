// const express = require("express");

// const userRouter = express.Router();

// const uuid = require("uuid");
// constUserModel = require("../models/userModels");

// userRouter.route("/")
//     .get((req, res) => {
//         UserModel.find(req.query)
//             .exec((err, foundUser) => {
//                 if (err) res.send(err);
//                 else
//                     res.status(200).send(foundUser)
//             })
//             .post((req, res) => {
//                 const newUser = new UserModel(req.body);
//                 newUser.save((err, addedUser) => {
//                     if (err) return res.send(err);
//                     res.status(201).send(addedUser);
//                 })
//             });
//     })
//     module.exports = userRouter;