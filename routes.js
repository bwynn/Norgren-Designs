var path = require("path");

var Employees = require("./models/employees");
var Home = require("./models/home");
var Service = require("./models/services");

module.exports = function(app) {
  // server routes =============================================================
  // handle api calls
  // authentication routes

  // Home Routes
  // get
  app.get("/api/main", function(req, res) {
    // get home db contents
    Home.find(function(err, home) {
      if (err) {
        res.send(err);
      }

      res.json(home); // get contents of home
    });
  });

  // post
  app.post("/api/main", function(req, res) {
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

  // Employees Routes
  app.get("/api/employees", function(req, res) {
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
  app.get("/api/services", function(req, res) {
    // get services db contents
    Service.find(function(err, service) {
      if (err) {
        res.send(err);
      }

      res.json(service);
    });
  });

  // post
  app.post("/api/services", function(req, res) {
    // post services
    var service = new Service();

    service.title = req.body.title;
    service.items = req.body.items;

    service.save(function(err, service) {
      if (err) {
        res.send(err);
      }

      res.json(service);
    })
  })
  // put
  // delete

// frontend routes
// =============================================================================
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/views/index.html"));
});


};
