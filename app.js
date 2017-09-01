	    var express = require('express');
	    var app = express();
	    var bodyParser = require('body-parser');
	    var mongoose = require('mongoose');
	    /*var movie = require('./movie.model')*/
	    var first = require('./route/get');
	    var second = require('./route/post');
	    var third = require('./route/put');
	    var fourth = require('./route/remove');
	    /*var put = require('./route/put');
	    var del = require('./route/devare');*/
	    var db = 'mongodb://localhost/example';
	    mongoose.connect(db);
	    app.use(bodyParser.json())
	    app.use(bodyParser.urlencoded({
	        extended: true
	    }))

	    app.use('/a', first);
	    app.use('/b',second);
	    app.use('/',third);
	    app.use('/',fourth);
	    var port = 8080;




	    app.listen(port, function() {
	        console.log('app listening on port' + port);
	    })
	    module.exports=app;