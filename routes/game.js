var mysql  = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'survey'});
var async  = require('async');

exports.main = function(req, res) {
    res.render("partials/main");
};

exports.multiple_view = function(req, res) { 
    res.render("partials/multiple_view");
}

exports.field = function(req, res) { 
    res.render("partials/field");
}

exports.create_form = function(req, res) {

    console.log(req.body);

    var post = {
        'name': req.body.name
    }

    async.waterfall([
        function(callback) {
            //this should check if Forms exist. Send down a reply to second callback. 
        },
        function(arg, callback) { 
            client.query("INSERT INTO Forms SET ?", post, function(err, result) {
                callback(null, result);
            });
        },
        function(arg1, callback) { 
            client.query("SELECT * FROM Forms WHERE ?", {id: arg1.insertId}, function(err, result) {
                callback(null, result);
            }); 
        },
    ], function(err, result) {
        res.json(result);
    });
}

exports.create_question = function(req, res) {

    //console.log(req.body); 
    /*
    async.waterfall([
        function(callback) { 

            var post = {
                'name': makeid()
              , 'theme': 'light'
            }

            client.query("INSERT INTO Forms SET ?", post, function(err, result) {
                callback(null, result);
            });
        },
        function(arg1, callback) { 
            client.query("SELECT id FROM ElementType WHERE ?", {name: req.body.type}, function(err, result) {
                callback(null, result, arg1);
            }); 
        },
        function(dbresult, arg1, callback) {

            var post = {
                'form_id': arg1.insertId
              , 'question':req.body.question 
              , 'element_type_id': dbresult[0].id
            }

            client.query("INSERT INTO FormElements SET ?", post, function(err, result) {
                callback(null, result);
            });

        }
    ], function(err, result) {
        res.json(result);
    });
    */
}
