var LocalStrategy = require('passport-local').Strategy,
      User = require('../models/user_model');

module.exports = function(passport) {

  // serialize user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log(user);
      done(err, user);
    });
  });

  // sign up
  // =============================================================================

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // pass back the req to the callback
  },
  function(req, email, password, done) {

    // asyc setup
    // User.findOne wont fire until data is sent back
    process.nextTick(function() {

      // find user by email
      User.findOne({'email': email}, function(err, user) {
        if (err) {
          return done(err);
        }

        // check for duplicate users
        if (user) {
          return done(null, false , req.flash('signupMessage', 'This username is already taken'));
        }
        else {
          // no username already taken
          var newUser = new User();

          // set credentials
          newUser.email = email;
          newUser.password = newUser.generateHash(password);

          // save the user
          newUser.save(function(err) {
            if (err) {
              throw err;
            }

            return done(null, newUser);
          });
        }
      });
    });
  }));

  // login
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, done) {
    
    User.findOne({email: email}, function(err, user) {
      if (err) {
        res.send(err);
      }

      if (!user) {
        return done(null, false, req.flash('login-message', 'No user found.'));
      }

      if (!user.validPassword(password)) {
        return done(null, false, req.flash('login-message', "Oops! Wrong Password"));
      }

      return done(null, user);
    });
  }));

};
