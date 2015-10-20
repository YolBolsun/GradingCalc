/**
 * Created by jonathanschenker on 10/8/15.
 */
var express = require('express'),
    bodyParser = require('body-parser');
    averager = require('./Averaging');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Takes a post and averages the supplied values
 * @param weights[] - Array of weight values (0-1, or 0-100) for grades
 * @param grades[] - Array of grades to average
 * @return float Average - Weighted average of all grades
 */
app.post('/average', function(req, res)
{
    var Grades = req.body.grades;
    var Weights = req.body.weights;
    if(Grades == null || Weights == null)
    {
        //Return 400 Error
        res.status(400).send({E:"No data was sent"});
        return;
    }
    //Add up Weights
    var tWeight = averager.getWeight(Weights);
    console.log("Total Weight: " + tWeight);
    //Check weight = 100%
    x = averager.checkWeight(tWeight);
    if(x != 100)
    {
        res.status(400).send({E:"Weights must add up to 100% - Current: " + x + "%"});
        return;
    }
    //Get Average
    var total = averager.average(Grades, Weights, tWeight);
    console.log("Average: " + total);

    //Send back average to client
    res.send({average:total});
});






var server = app.listen(8080, function () {
    console.log('Example app listening on ' + server.address().port);
});