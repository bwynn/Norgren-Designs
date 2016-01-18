var Employees = require("./models/employees");
var Home = require("./models/home");
var Services = require("./models/services");

module.exports = function(app) {
  // server routes =============================================================
  // handle api calls
  // authentication routes

  // Home Routes
  // get
  app.get("/main", function(req, res) {
    // get home db contents
    Home.find(function(err, home) {
      if (err) {
        res.send(err);
      }

      res.json(home); // get contents of home
    });
  });

  // post
  app.post("/main", function(req, res) {
    // create a new instance of home
    var home = new Home();

    home.heading = req.body.heading;
    home.content = req.body.content;

    home.save(function(err) {
      if (err) {
        res.send(err);
      }

      res.json({message: "Home page content successfully created"});
    });
  });

  // put

  // delete

  // Employees Routes
  app.get("/employees", function(req, res) {
    // get employees db contents
    Employees.find(function(err, employees) {
      if (err) {
        res.send(err);
      }

      res.json(employees);
    });
  });

  // post
  // put
  // delete

  // Services Routes
  app.get("/services", function(req, res) {
    // get services db contents
    Services.find(function(err, services) {
      if (err) {
        res.send(err);
      }

      res.json(services);
    });
  });

  // post
  // put
  // delete

// frontend routes
// =============================================================================
app.get("*", function(req, res) {
  res.sendfile("./public/views/index.html");
});


};
