var express = require('express');
var router = express.Router();
var movie = require('../model/movie');

router.put('/movie/:id', (req, res) => {
    movie.update({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                director: req.body.director
            }
        }, { upsert: true },
        function(err, newMovie) {
            if (err) {
                console.log('error occured');
            } else {
                //console.log(newMovie);
                res.send(newMovie);
            }
        });

});
module.exports = router;