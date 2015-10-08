/**
 * Created by jonathanschenker on 10/8/15.
 */
var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));










var server = app.listen(8080, function () {
    console.log('Example app listening on ' + server.address().port);
});