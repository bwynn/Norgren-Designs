// server.js

// modules
// =============================================================================
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var mongodb = require('mongodb');


// connection
// =============================================================================
var options = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  }
};

// config files
var db = require("./config/db");

// set port
var port = process.env.PORT || 8080;

console.log(process.env.MONGODB_URI);

// connect to db
mongoose.connect(process.env.MONGODB_URI || db.database, options);
//mongoose.createConnection(process.env.MONGODB_URI);

require('./config/passport')(passport);

// get console responses
app.use(morgan('dev'));

// set data types using body-parser
app.use(bodyParser.json());

// parse application/vnd.api+json as json
//app.use(bodyParser.json({type: "application/vnd.api+json"}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
//app.use(methodOverride("X-HTTP-Method-Override"));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

app.use(session({secret: 'noRgr3N'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes
// =============================================================================
require("./routes")(app, passport);

// start app
// =============================================================================
app.listen(port);

console.log("Server running on port " + port);

exports = module.exports = app;
