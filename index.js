// A variable that contains the express module
var express = require('express');

// Assign function express to call to app
var app = express();

// GET request sends back message to root url
app.get('/',function (req, res) {
    res.send('Simple Web Application is UP');
});

app.listen(8081, function() {
    console.log('Simple Web Application running on port 8081!');
});

// Run node index.js in terminal to see output and head over to http://localhost:8081/ to see it in browser