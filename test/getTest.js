var expect =require('chai').expect;
var App = require('../app.js');
var request= require('supertest')
var sinon = require('sinon')
var movie = require('../model/movie')
var modelStub = sinon.stub(movie,'find')
var server= request.agent('http://localhost:8080')
var express = require('express')

describe ('GET /index/home ', function(){
	it('respond with json',function(done){
		modelStub.yields(null,[{name:"abc",director:"xyz"}])
		request(App)
		.get('/a/movies')
		.expect('Content-Type',/json/)
		.end(function(err,res){
			if (err)return done(err);
			expect(res.body[0].name).to.be.equal("abc");
			expect(res.body[0].director).to.be.equal("xyz");
			done();


		})
	})
})