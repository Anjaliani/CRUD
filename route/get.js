	let express = require('express');
	var router = express.Router();
	let movie = require('../model/movie')

	router.get('/movies', (req, res)=>{
	    console.log('getting all movies');
	    movie.find(function(err, movies) {
	            if (err) {
	                res.send('error has occured');
	            } else {
	                //console.log(movies);
	                res.json(movies);

	            }
	        });
	});

	module.exports = router;