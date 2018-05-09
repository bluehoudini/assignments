const mongoose = require("mongoose");
const {Schema} = mongoose;

const issueSchema = new Schema({
    argument: {required: true, type: String},
    likeStatus: {required: false, type: Boolean},
    dislikeStatus: {required: false, type: Boolean}
});

const IssueModel = mongoose.model("issue", issueSchema);
module.exports = IssueModel;