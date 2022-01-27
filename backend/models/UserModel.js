const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: String,
	bag: Array
});

module.exports = mongoose.model('UserModel', userSchema);