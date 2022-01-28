const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: String,
	bag: Array,
	badges: Array
});

module.exports = mongoose.model('UserModel', userSchema);