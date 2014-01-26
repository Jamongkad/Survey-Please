var mysql  = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'survey'});
var async  = require('async');

exports.start = function(req, res) {
    res.render("partials/convo_start");
};
