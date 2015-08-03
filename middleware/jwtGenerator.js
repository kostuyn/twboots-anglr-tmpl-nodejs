var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = function (req, res, next) {
    var token = jwt.sign({user: req.user}, config.get('jwt_secret'));
    res.locals.jwtToken = token;
    next();
};