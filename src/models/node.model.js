const mongoose = require("mongoose");

const nodeSchema = new mongoose.Schema({
    title :string,
    description :string,
})
 
const noteModel = mongoose.model("Node", nodeSchema);

module.exports = noteModel;
