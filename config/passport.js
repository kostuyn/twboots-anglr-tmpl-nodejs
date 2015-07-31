var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var jwt = require('jsonwebtoken');

var User=require('../models/user');

var opts = {}
opts.secretOrKey = 'secret';
//opts.issuer = "accounts.examplesoft.com";
//opts.audience: "yoursite.net";

module.exports=function(passport){
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.sub}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
                // or you could create a new account
            }
        });
    }));

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        process.nextTick((function () {
            User.findOne({'local.email': email}, function (err, user) {
                if (err)
                    return done(err);

                if (user) {
                    //return done(null, false, req.flash('signupMessage', 'That email is already taken.'))
                    return done(null, false);
                } else {
                    var newUser = new User();
                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save(function (err) {
                        if (err)
                            throw err;

                        return done(null, newUser);
                    });
                }
            });
        }));
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        User.findOne({'local.email': email}, function (err, user) {
            if (err)
                return done(err);

            if (!user)
                //return done(null, false, req.flash('loginMessage', 'No user found.'));
                return done(null, false);
            if (!user.validPassword(password))
                //return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                return done(null, false);

            return done(null, user);
        });
    }));
};