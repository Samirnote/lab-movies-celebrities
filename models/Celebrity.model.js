//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celibritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const celibrityModel = mongoose.model("celebrity", celibritySchema);

module.exports = celibrityModel;
