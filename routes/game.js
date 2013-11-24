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

    var post = {
        'name': req.body.name
      , 'name_id': req.body.name_id
    }

    async.waterfall([
        function(callback) {
            //this should check if Forms exist. Send down a reply to second callback. 
            client.query("SELECT * FROM Forms WHERE ?", {"name_id": req.body.name_id}, function(err, result) {  
                callback(null, result);
            });
        },
        function(arg, callback) {  
            if(arg.length > 0) { 
                //record exists throw error json 
                callback(null, {"status": "record exists", "success": arg});
            } else {
                client.query("INSERT INTO Forms SET ?", post, function(err, result) { 
                    callback(null, {"status": "new record", "success": result});
                });    
            }
        },
        function(arg, callback) { 

            var id;
            if(typeof arg.success.length != 'undefined') {
                id = arg.success[0].id;     
            } else {
                id = arg.success.insertId;         
            }

            client.query("SELECT * FROM Forms WHERE ?", {"id": id}, function(err, result) {
                callback(null, result);
            }); 

        },
    ], function(err, result) {
        res.json(result);
    });
}

exports.create_question = function(req, res) {

    async.waterfall([
        
        function(callback) { 
            client.query("SELECT * FROM ElementType WHERE ?", {"name": req.body.type}, function(err, result) { 
                callback(null, result);
            })
        },
        function(arg, callback) {
            //do some checking where in existing FormElements just add field to ElementListValues
            var post = {
                'form_id': req.body.form_data[0].id
              , 'question': req.body.question
              , 'element_type_id': arg[0].id
            } 

            client.query("INSERT INTO FormElements SET ?", post, function(err, result) {
                callback(null, result);
            });
        },
        function(arg, callback)  {
            //console.log(arg.insertId);
            //console.log(req.body);
            if(req.body.type == "multi_choice_one" || req.body.type == "multi_choice_multi") {
                if(req.body.fields.length > 0) {
                    for(var i=0;req.body.fields.length>i;i++) {

                        var data = req.body.fields[i];

                        var post = {
                            "element_id": arg.insertId
                          , "name": data.field_value
                          , "value": data.field_key
                        }

                        client.query("INSERT INTO ElementListValues SET ?", post, function(err, result) {});
                    }
                }
            }
            callback(null, {"result": "okay"})
        },
    ], function(err, result) {
        res.json(result);
    });

}
