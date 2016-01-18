var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: String,
  title: String,
  bio: String,
  class: String
});

module.exports = mongoose.model("Employee", EmployeeSchema);
