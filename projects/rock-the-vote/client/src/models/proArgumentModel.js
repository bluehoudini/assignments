const mongoose = require("mongoose");

const { Schema } = mongoose;

const proArgumentSchema = new Schema({
    argument: {
        required: true,
       type: String,
    }
})

const proArgumentModel = mongoose.model("argument", proArgumentSchema);
module.exports = proArgumentModel;