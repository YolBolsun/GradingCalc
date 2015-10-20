/*var assert = require('assert');
 var should = require('should');
 var fs = require('fs');
 var _ = require('lodash');
 var chai = require('chai');
 var expect = chai.expect;
 var sinonChai = require('sinon-chai');
 require('mocha-sinon');
 chai.use(sinonChai);
 var sinon = require('sinon');*/
/*
 function test()
 {
 console.log("test");
 $.ajax({
 method: 'POST',
 url:'/test',
 data: {},
 success:function(data)
 {
 //Success - Alert with average
 console.log("ran test?");
 alert("ran tests?");
 },
 error:function(err)
 {
 //Error - Alert with error
 if(err && err.responseJSON)
 {
 console.log("error" + err.responseJSON.E);
 alert("Error: " + err.responseJSON.E);
 }
 else
 alert("An Error Occurred");

 }
 });
 }*/
//Submit grades and weights to server for testing
function test()
{
    console.log("Submitted");
    var Grades = [];
    var Weights = [];
    //Find all grades as floats
    $(".grade").each(function() {
        if(!isNaN(this.value)) {
            Grades.push(parseFloat(this.value, 10));
        }
        else
            Grades.push(0);
    });
    //Find all weights as floats
    $(".weight").each(function() {
        if(!isNaN(this.value)) {
            Weights.push(parseFloat(this.value, 10));
        }
        else
            Weights.push(0);
    });
    postTest(Grades, Weights);
}

//Ajax POST to average with weights and grades
function postTest(Grades, Weights)
{
    $.ajax({
        method: 'POST',
        url:'/test',
        data: {grades:Grades, weights:Weights},
        success:function(data)
        {
            //Success - Alert with average
            console.log(data.average);
            alert("Current Grade: " + data.average);
        },
        error:function(err)
        {
            //Error - Alert with error
            if(err && err.responseJSON)
            {
                console.log("error" + err.responseJSON.E);
                alert("Error: " + err.responseJSON.E);
            }
            else
                alert("An Error Occurred");

        }
    });
}
module.exports = {
    test : test
}
/*
 describe('public/calc', function(){

 var calc = require('../public/calc');
 describe('#add_fields', function() {

 before(function(){

 });

 after(function() {

 });

 it('test 1', function(done) {
 calc.add_fields();
 done();
 });

 });
 });*/