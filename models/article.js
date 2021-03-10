const mongoose = require('../database/mongodb')

const Schema = mongoose.Schema

const userSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	type: {
		type: Number,
		default: 1
	}
})

const Article = mongoose.model('Article', userSchema)

module.exports = Article