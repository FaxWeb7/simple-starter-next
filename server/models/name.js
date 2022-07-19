const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nameSchema = new Schema({
  example: {
    type: String,
    required: true,
    unique: true,
    default: 'asd'
  },
});

const nameList = mongoose.model("nameSchema", nameSchema);

module.exports = nameList;