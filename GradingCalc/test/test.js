var assert = require('assert');
var should = require('should');
var fs = require('fs');
var _ = require('lodash');
var chai = require('chai');
var expect = chai.expect;
var sinonChai = require('sinon-chai');
require('mocha-sinon');
chai.use(sinonChai);

var weights;
var grades;
var totalWeight;
var average;

describe('Averaging', function(){

    averager = require('../Averaging');
    //testing correct decimal total which is also the edge case
    describe('#decimal total', function() {

        before(function(){
            weights = [.3,.7];
            grades = [70, 100];
            totalWeight = 1;
            average = .3*70 + .7 * 100;
        });

        after(function() {
            weights = null;
            grades = null;
            totalWeight = null;
        });
        it('1 total getWeight', function() {
            assert(1 == averager.getWeight(weights));
        });
        it('1 total checkWeight', function() {
            assert(100 == averager.checkWeight(totalWeight));
        });
        it('1 total average', function() {
            assert(average == averager.average(grades, weights, totalWeight));
        });
    });
    //testing 100 total which is also an edge case
    describe('#whole numbers total', function() {

        before(function(){
            weights = [30,70];
            grades = [70, 100];
            totalWeight = 100;
            average = .3*70 + .7 * 100;
        });

        after(function() {
            weights = null;
            grades = null;
            totalWeight = null;
        });
        it('100 total getWeight', function() {
            assert(100 == averager.getWeight(weights));
        });
        it('100 total checkWeight', function() {
            assert(100 == averager.checkWeight(totalWeight));
        });
        it('100 total average', function() {
            assert(average == averager.average(grades, weights, totalWeight));
        });
    });
    //total less than 1 - average doesnt get called in this case so it isnt tested
    describe('#decimal total broken', function() {

        before(function(){
            weights = [.3,0];
            grades = [70, 100];
            totalWeight = .3;
        });

        after(function() {
            weights = null;
            grades = null;
            totalWeight = null;
        });
        it('1 total getWeight', function() {
            assert(.3 == averager.getWeight(weights));
        });
        it('1 total checkWeight', function() {
            assert(30 == averager.checkWeight(totalWeight));
        });
    });
//total less than 100, more than 1 - average doesnt get called in this case so it isnt tested
    describe('#whole total broken', function() {

        before(function(){
            weights = [30,0];
            grades = [70, 100];
            totalWeight = 30;
        });

        after(function() {
            weights = null;
            grades = null;
            totalWeight = null;
        });
        it('1 total getWeight', function() {
            assert(30 == averager.getWeight(weights));
        });
        it('1 total checkWeight', function() {
            assert(30 == averager.checkWeight(totalWeight));
        });
    });

    describe('#whole total broken over 100', function() {

        before(function(){
            weights = [30,75];
            grades = [70, 100];
            totalWeight = 105;
        });

        after(function() {
            weights = null;
            grades = null;
            totalWeight = null;
        });
        it('1 total getWeight', function() {
            assert(105 == averager.getWeight(weights));
        });
        it('1 total checkWeight', function() {
            assert(105 == averager.checkWeight(totalWeight));
        });
    });

});