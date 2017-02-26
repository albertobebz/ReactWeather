// Require express so we can have access to the entire express APPI
var express = require('express');

// create our app, calling the express library
var app = express();

// serve all the pages under public folder
app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Express server is up on port 3000');
});
