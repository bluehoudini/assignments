const mongoose = require("mongoose");
const { Schema } = mongoose;


const issueSchema = new Schema(
    [

    ]
)

const IssueModel = mongoose.model("issues", issueSchema);
module.exports = IssueModel;