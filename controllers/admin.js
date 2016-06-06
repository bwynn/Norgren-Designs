var mongoose = require('mongoose');
var Employees = require('../models/employees');
var Home = require('../models/home');
var Message = require('../models/messages');
var Service = require('../models/services');

// MAIN CONTROLLERS
// =============================================================================

// get
exports.getMain = function(req, res) {
  // get home db contents
  Home.find(function(err, home) {
    if (err) {
      res.send(err);
    }

    res.json(home); // get contents of home
  });
};

// post
exports.postMain = function(req, res) {
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
};

// put
exports.updateMain = function(req, res) {
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
};

// delete
exports.deleteMain = function(req, res) {
  Home.remove({_id: req.body.id}, function(err, home) {
    if (err) {
      res.send(err);
    }

    res.json({message: "Content successfully deleted."});
  });
};

// EMPLOYEES CONTROLLERS
// =============================================================================

// get
exports.getEmployees = function(req, res) {
  // get employees db contents
  Employees.find(function(err, employees) {
    if (err) {
      res.send(err);
    }

    res.json(employees);
  });
};

exports.addEmployee = function(req, res) {
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
};

// put
exports.updateEmployee = function(req, res) {
  Employees.find(function(err, employee) {
    Employees.update({_id: req.body.id}, {
      name: req.body.name,
      class: req.body.class,
      title: req.body.title,
      bio: req.body.bio
    }, function(err, employee) {
      if (err) {
        res.send(err);
      }

      res.json(employee);
    });
  });
};

// delete
exports.removeEmployee = function(req, res) {
  Employees.remove({_id: req.body.id}, function(err, employee) {
    if (err) {
      res.send(err);
    }

    res.json({message: "employee successfully deleted"});
  });
};


// SERVICES CONTROLLERS
// =============================================================================

// get
exports.getServices = function(req, res) {
  // get services db contents
  Service.find(function(err, service) {
    if (err) {
      res.send(err);
    }

    res.json(service);
  });
};

// post
exports.addServices = function(req, res) {
  // post services
  var service = new Service();

  service.title = req.body.title;

  service.save(function(err, service) {
    if (err) {
      res.send(err);
    }

    res.json(service);
  })
};

// put
exports.addServiceItems = function(req, res) {
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
};

// delete
exports.removeService = function(req, res) {
  Service.remove({_id: req.body.id}, function(err, service) {
    if (err) {
      res.send(err);
    }

    res.json("service successfully deleted");
  });
};

// MESSAGES CONTROLLERS
// =============================================================================

// get
exports.getMessages = function(req, res) {
  // get messages db contents
  Message.find(function(err, messages) {
    if (err) {
      res.send(err);
    }

    res.json(messages);
  });
};

// post
exports.postMessage = function(req, res) {

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
};

// delete
exports.deleteMessage = function(req, res) {

  console.log(req.body);

  Message.remove({_id: req.body.id}, function(err, user) {
    if (err) {
      res.send(err);
    }

    res.json({"message": "Record removed"});
  });
};
