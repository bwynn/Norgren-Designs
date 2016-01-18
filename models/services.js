var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ServicesSchema = new Schema({
  title: String,
  items: [String]
})
