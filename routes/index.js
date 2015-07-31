var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports=function(passport){
  router.post('/login', passport.authenticate('jwt', { session: false}),
      function(req, res) {
        res.send(req.user);
      }
  );

  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  return router;
};
