/**
 * Created by jonathanschenker on 10/8/15.
 */
var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/average', function(req, res)
{
    var Grades = req.body.grades;
    var Weights = req.body.weights;
    var total = 0;
    var tWeight = 0;
    if(Grades == null || Weights == null)
    {
        res.status(400).send({E:"No data was sent"});
        return;
    }
    for(var i=0; i<Weights.length; i++)
    {
        tWeight += parseFloat(Weights[i], 10);
    }
    console.log("Total Weight: " + tWeight);
    if(tWeight != 1 && tWeight != 100)
    {
        var x = tWeight;
        if(tWeight < 1)
            x = tWeight*100;
        x = parseInt(x, 10);
        res.status(400).send({E:"Weights must add up to 100% - Current: " + x + "%"});
        return;
    }

    for(var i=0; i<Weights.length; i++)
    {
        total += parseFloat(Grades[i],10)*(parseFloat(Weights[i],10)/tWeight);
    }
    console.log("Average: " + total);
    res.send({average:total});
});






var server = app.listen(8080, function () {
    console.log('Example app listening on ' + server.address().port);
});