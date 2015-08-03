var express = require('express');
var jwtGenerator = require('../middleware/jwtGenerator');

var router = express.Router();

function mapUser(user) {
    return {
        id:user._id,
        email:user.local.email
    }
}

module.exports = function (passport) {
    router.get('/profile',
        passport.authenticate('jwt', {session: false}),
        function (req, res) {
            var user=mapUser(req.user);
            res.send(user);
        }
    );

    router.get('/', function (req, res) {
        res.render('index', {title: 'Express'});
    });

    router.post('/signup',
        [
            passport.authenticate('local-signup', {session: false}),
            jwtGenerator
        ],
        function (req, res) {
            res.status(201);
            res.send({jwt: res.locals.jwtToken});
        });

    router.post('/login',
        [
            passport.authenticate('local-signin', {session: false}),
            jwtGenerator
        ],
        function (req, res) {
            res.send({jwt: res.locals.jwtToken});
        });

    return router;
};
