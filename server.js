// Require express so we can have access to the entire express APPI
var express = require('express');

// create our app, calling the express library
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

// serve all the pages under public folder
app.use(express.static('public'));

app.listen(port, function(){
  console.log('Express server is up on port ' + PORT);
});
