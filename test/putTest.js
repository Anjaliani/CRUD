var expect =require('chai').expect;
var App = require('../app.js');
var request= require('supertest')
var supertest=require('supertest')
var sinon = require('sinon')
var movie = require('../model/movie.js')

//var server= request.agent('http://localhost:8080')
var express = require('express')

var updateStub=sinon.stub(movie,'update')
describe('testing update',function(){
	before(function(){
		updateStub.withArgs({'_id':'abcd'},
			{$set:{"name":"anjali", "director":"johar"}})
      .yields(null,{
      	"ok":1,
      	"nModified":1,
      	"n":1
      })
			
	})

it("should respond",function(done){
	request(App)
	.put('/movie/ab')
	.send({"name":"anjali","director":"johar"})
	.end(function(err,res){
			if (err)return done(err);
			expect(res.body.ok).to.be.equal(1);

})
	done();
})

})
