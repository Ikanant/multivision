var express = require('express');

var env = process.env.NODE_ENV=process.env.NODE_ENV || 'development';
var port = 3000;

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// Match ALL routes (JS, CSS, IMG, anything)
app.get('*', function(req, res){
    res.render('index');
});


app.listen(port, function(){
    console.log('Listening on port: ' + port);
});