const mongoose = require("mongoose");

const { Schema } = mongoose;

const conArgumentSchema = new Schema({
    argument: {
        required: true,
       type: String,
    }
})

const conArgumentModel = mongoose.model("argument", conArgumentSchema);
module.exports = conArgumentModel;