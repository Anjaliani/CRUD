var express = require('express');
var router = express.Router();
var movie = require('../model/movie');

router.delete('/movie1/:id',(req,res)=>{
	movie.findOneAndRemove({
		_id:req.params.id
	},function(err,movie){
		if(err){
			console.log('error')
		}else{
			console.log("movie")
			res.send(movie);/movie/:id
		
		}
	
	});
});
module.exports = router;
