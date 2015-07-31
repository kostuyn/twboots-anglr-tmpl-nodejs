var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs')

var userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String
    }
});

userSchema.methods.generateHash = function (password) {
    bcrypt.genSalt(8, function (salt) {
        bcrypt.hash(password, salt, null, function (hash) {
            callback(hash);
        });
    });
};

userSchema.methods.validatedPassword = function (password) {
    bcrypt.compare(password, this.local.password, function (result) {
        callback(result);
    });
};

module.exports = mongoose.model('User', userSchema);