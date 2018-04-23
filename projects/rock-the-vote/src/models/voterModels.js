const mongoose = require("mongoose");

const { Schema } = mongoose;

const voterSchema = new Schema({
    name: {
        required: true,
       type: String
    },
    age: {
        required: true,
        type: Number
    },
    emailAddress: {
        required: true,
        type: String
    },
})

const voterModel = mongoose.model("voter", voterSchema);
module.exports = voterModel;