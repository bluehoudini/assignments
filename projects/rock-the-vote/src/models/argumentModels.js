const mongoose = require("mongoose");

const { Schema } = mongoose;

const argumentSchema = new Schema({
    argument: {
        required: true,
       type: String,
    }
})

const argumentModel = mongoose.model("argument", argumentSchema);
module.exports = argumentModel;