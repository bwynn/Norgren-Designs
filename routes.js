var path = require("path");

var Employees = require("./models/employees");
var Home = require("./models/home");
var Service = require("./models/services");
var Message = require('./models/messages');

module.exports = function(app) {
  // server routes =============================================================
  // handle api calls
  // authentication routes

  // Home Routes
  // get - ADMIN & User
  app.get("/api/main", function(req, res) {
    // get home db contents
    Home.find(function(err, home) {
      if (err) {
        res.send(err);
      }

      res.json(home); // get contents of home
    });
  });

  // post - ADMIN This route creates a new home content object
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
  app.put('/api/main', function(req, res) {

    Home.findOne({_id: req.body.id}, function(err, home) {
      Home.update({
        heading: req.body.heading,
        content: req.body.content,
      }, function(err, home) {
        if (err) {
          res.send(err);
        }

        res.json(home);
      });
    });
  });

  // Employees Routes - ADMIN & user route
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
  app.post('/api/employees', function(req, res) {
    var employee = new Employees();

    employee.name = req.body.name;
    employee.title = req.body.title;
    employee.class = req.body.class;
    employee.bio = req.body.bio;

    employee.save(function(err, employee) {
      if (err) {
        res.send(err);
      }

      res.json(employee);
    });
  });
  // put
  // delete

  // Services Routes - ADMIN & user route
  app.get("/api/services", function(req, res) {
    // get services db contents
    Service.find(function(err, service) {
      if (err) {
        res.send(err);
      }

      res.json(service);
    });
  });

  // post - ADMIN - endpoint creates a new service item. This is responsible for the
  // title creation of a service item, leaving the items to be filled individually
  // via the front end
  app.post("/api/services", function(req, res) {
    // post services
    var service = new Service();

    service.title = req.body.title;

    service.save(function(err, service) {
      if (err) {
        res.send(err);
      }

      res.json(service);
    })
  });

  // put - ADMIN - endpoint will update individual items within the items array
  app.put('/api/services/items', function(req, res) {

    Service.findOne({_id: req.body.id}, function(err, service) {
      Service.update({title: req.body.title}, {
        $push: {items: { $each: [req.body.items]}}
      }, function(err, service) {
        if (err) {
          res.send(err);
        }

        res.json(service);
      });
    });
  });

  // delete - ADMIN -- endpoint removes item by id
  app.delete('/api/services', function(req, res) {
    Service.remove({_id: req.body.id}, function(err, service) {
      if (err) {
        res.send(err);
      }

      res.json("service successfully deleted");
    });
  });

  // Messages Routes
  // this will handle the form data coming from inquiries
  // GET - for admin views
  app.get('/api/messages', function(req, res) {
    // get messages db contents
    Message.find(function(err, messages) {
      if (err) {
        res.send(err);
      }

      res.json(messages);
    });
  });

  // POST - from user input
  app.post('/api/messages', function(req, res) {

    var msg = new Message();

    msg.name = req.body.name;
    msg.email = req.body.email;
    msg.message = req.body.message;

    msg.save(function(err, message) {
      if (err) {
        res.send(err);
      }

      res.json(message);
    });
  });

// frontend routes
// =============================================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

app.get("/admin", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/views/admin/admin.html"));
})


};
