var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HomeSchema = new Schema({
  heading: String,
  content: String
});

module.exports = mongoose.model("Home", HomeSchema);
