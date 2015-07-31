var nconf = require('nconf');
var path = require('path');

nconf.argv().env();

var configName = '';
switch (process.env.NODE_ENV) {
    case 'production':
        configName = 'prod.json';
        break;
    default:
        configName = 'dev.json';
        break;
}

if (configName) {
    nconf.file({file: path.join(__dirname, configName)});
}

module.exports = nconf;