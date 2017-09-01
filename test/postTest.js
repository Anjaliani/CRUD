var expect =require('chai').expect;
var should =require('chai').should();
var App = require('../app.js');
var request= require('supertest')
var sinon = require('sinon')
var movie = require('../model/movie')

var server= request.agent('http://localhost:8080')
var express = require('express')

describe ('POST /create ', function(){
	it('should respond with 200',function(done){
		
		request(App)
		.post('/b/movie')
		.send({name:"lala" , director:"jojo"})
		.expect(200)
		.expect('Content-Type',/json/)
		.end(function(err,res){
			if (err)return done(err);
			res.body.should.have.property('name',"lala")
			res.body.should.have.property('director',"jojo")
			done();


		})
	})
})