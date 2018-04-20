const mongoose = require("mongoose");

const { Schema } = mongoose;

//Schema is a constructor
//determines the template for all documents in a collection

const catSchema = new Schema({
    name: String,
    breed: {
        required: true,
        type: String
    },
    age: Number,
    adoptionStatus: {
        type: String,
        default: "not adopted"
    },
    agencyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "agencies"
    }
})
//creates a collection
const CatModel = mongoose.model("cats", catSchema);
module.exports = CatModel;