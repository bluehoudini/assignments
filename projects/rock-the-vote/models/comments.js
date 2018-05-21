const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
    name: String,
    comment: String,
    issueId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "issues"
    }]
});

module.exports = mongoose.model("comments", commentSchema);