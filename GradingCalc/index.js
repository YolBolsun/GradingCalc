/**
 * Created by jonathanschenker on 10/8/15.
 */
var express = require('express'),
    bodyParser = require('body-parser');

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
    var total = 0;
    var tWeight = 0;
    if(Grades == null || Weights == null)
    {
        //Return 400 Error
        res.status(400).send({E:"No data was sent"});
        return;
    }
    //Add up for total weights
    for(var i=0; i<Weights.length; i++)
    {
        tWeight += parseFloat(Weights[i], 10);
    }
    console.log("Total Weight: " + tWeight);
    //Determine if weights add up to 1 or 100
    if(tWeight != 1 && tWeight != 100)
    {
        var x = tWeight;
        if(tWeight < 1)
            x = tWeight*100;
        x = parseInt(x, 10);
        //If 1 or 100 -> Send 400 error that weights need to add up to 100
        res.status(400).send({E:"Weights must add up to 100% - Current: " + x + "%"});
        return;
    }

    //Add up weighted averages
    for(var i=0; i<Weights.length; i++)
    {
        total += parseFloat(Grades[i],10)*(parseFloat(Weights[i],10)/tWeight);
    }
    console.log("Average: " + total);
    //Send back average to client
    res.send({average:total});
});






var server = app.listen(8080, function () {
    console.log('Example app listening on ' + server.address().port);
});