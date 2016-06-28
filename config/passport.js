var LocalStrategy = require('passport-local').Strategy,
      User = require('../models/user_model');

module.exports = function(passport) {

  // serialize user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // deserialize the user session
  passport.deserializeUser(function(id, done) {
    done(err, user);
  });

  // login
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    usernamePassword: 'password',
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
