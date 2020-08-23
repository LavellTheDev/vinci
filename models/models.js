var mongoose = require('mongoose');

var emailSchema = mongoose.Schema({
	email: String,
	dateAdded: Date
})

module.exports = {
	Email: mongoose.model('Email', emailSchema)
}