var express = require('express');
var router = express.Router();
var movie = require('../model/movie');

router.post('/movie', (req, res) => {
    var newMovie = new movie();
    newMovie.name = req.body.name;
    newMovie.director = req.body.director;
    newMovie.save((err, movies) => {

        if (err) {
            console.log('error');

        } else {
            //console.log(movies);
            res.json(movies);
        }
    });
});
module.exports = router;