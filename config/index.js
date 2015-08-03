var nconf = require('nconf');
var path = require('path');

nconf.argv()
    .env()
    .file({file: path.join(__dirname, process.env.NODE_ENV + '.json')});

module.exports = nconf;