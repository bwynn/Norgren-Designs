var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  name: String,
  email: String,
  message: String,
  timestamp: Date
});

module.exports = mongoose.model("Message", MessageSchema);
