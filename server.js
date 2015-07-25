var express = require('express');
var bodyParser = require('body-parser');

var spawn = require("child_process").spawn;
var process = spawn('python',["search.py", "Pune"]);

process.stdout.on('data', function (data , err){
console.log(data);
    console.log(err);
});


