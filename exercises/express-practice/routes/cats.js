
const express = require("express");

const catRouter = express.Router();

const uuid = require("uuid");
const CatModel = require("../models/catModels.js");

//actual routes go here
// app.route("/cats")
//     .get((req, res) => {
//         res.status(200).send(cats);
//     })
catRouter.route("/")
    //find()
    .get((req, res) => {
        CatModel.find(req.query)
        .populate("agencyId")
        .exec((err, foundCats) => {
            if (err) res.send(err);
            else
                res.status(200).send(foundCats)
        })
        //check each cat in the array
        //filter it by matching properties/values
        // const queriedCats = cats.filter(cat => {
        //     for (let key in query) {
        //         if (!cat.hasOwnProperty(key) || String(cat[key]).toLowerCase() !== query[key].toLowerCase()) {
        //             return false
        //         }
        //     }
        //     return true;
        // })
        // res.status(200).send(queriedCats);
    })
    //post request:
    //convert request body from json
    //provide an id to the data (cat) being added

    //use save() to add a cat to the database

    .post((req, res) => {
        const newCat = new CatModel(req.body);
        newCat.save((err, addedCat) => {
            if (err) return res.send(err);
            res.status(201).send(addedCat);
        })
        //give data in request body an id
        // const newCat = req.body;
        // newCat._id = uuid();
        // console.log(req.body)
        //save the data in request body to the 'database'
        // cats.push(newCat);
        //send back the data that was added
        // res.status(201).send(newCat);
    });

//GET one request

//use findOne to get a particular cat

//any requests to the /cats/id endpoint we will send back the cat matching the id
catRouter.route("/:id")
    .get((req, res) => {
        CatModel.findOne({ _id: req.params.id },
             (err, foundCat) => {
            if (err) return res.send(err);
            if (!foundCat) return res.status(404).send({ message: "cat not found" });
            res.status(200).send(foundCat)
        })
    })
    //get param id
    // const { id } = req.params;
    // const foundCat = cats.filter(cat => cat._id === id)[0];
    //send back the cat
    // res.status(200).send(foundCat);

    // })
    // DELETE one request

    //use findByIdAndDelete() to delete

    .delete((req, res) => {
        CatModel.findOneAndRemove({ _id: req.params.id }, (err, deletedCat) => {
            if (err) return res.send(err);
            if (!deletedCat) return res.status(404).send({ message: "cat not found" });
            res.status(200).send(foundCat)
            res.status(204).send()
        })
    })

    //find and remove cat matching id:
    // cats = cats.filter(cat => cat._id !== id)
    //send back the cat
    // res.status(204).send();
    // })
    //PUT one

    //findByIdAndUpdate()

    .put((req, res) => {
        CatModel.findOneAndUpdate({ _id: req.params.id }, req.body,
            { new: true }, (err, updatedCat) => {
                if (err) return res.send(err);
                if (!updatedCat) return res.status(404).send({ message: "cat not found" });
                res.status(200).send(updatedCat)
                res.status(204).send()
            })
    })
//find the param id
// const { id } = req.params;
// let editedCat = req.body
//map through cats and replace the cat w/ matching id with req.body
// cats = cats.map(cat => cat._id === id ? editedCat = { ...cat, ...editedCat } : cat);
// res.status(200).send(editedCat);
// })

module.exports = catRouter;