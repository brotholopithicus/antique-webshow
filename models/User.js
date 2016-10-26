const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true }
});

userSchema.methods.encryptPassword = function() {
    let user = this;
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
        });
    });
}
userSchema.methods.comparePassword = function(candidate, callback) {
    bcrypt.compare(candidate, this.password, (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
}

const User = mongoose.model('User', userSchema);

module.exports = User;
