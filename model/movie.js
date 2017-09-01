	let mongoose = require("mongoose");
	let Schema = mongoose.Schema;
	let MovieSchema = new Schema({
	    name: String,
	    director: String
	})
	module.exports = mongoose.model('movie', MovieSchema);