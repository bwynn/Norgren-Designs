var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  name: String,
  email: String,
  message: String,
  timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Message", MessageSchema);
