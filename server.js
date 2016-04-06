var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');

var env = process.env.NODE_ENV=process.env.NODE_ENV || 'development';
var port = 3000;

var app = express();

// Compile function used by middleware for using Stylus
function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(logger('dev'));

//
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));
app.use(express.static(__dirname + '/public'));

// Match ALL routes (JS, CSS, IMG, anything)
app.get('*', function(req, res){
    res.render('index');
});


app.listen(port, function(){
    console.log('Listening on port: ' + port);
});