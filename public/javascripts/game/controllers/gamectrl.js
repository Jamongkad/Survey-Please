function GameCtrl($scope, $http) {

    $scope.addField = {};
    $scope.addField.lastAddedID = 0;

    $scope.reveal_creator = false;
    $scope.form_create = false;
    $scope.form_id = makeid();
    $scope.question_type = "default";
    $scope.form_data = [];

    $scope.form = {};
    $scope.form.form_fields = []; 
    $scope.form_data = false;

    $scope.open_creator = function() {
        $scope.reveal_form = !$scope.reveal_form; 
    }

    $scope.add_question = function() {
        $scope.reveal_creator = !$scope.reveal_creator;
    }

    $scope.select_type = function() {
        if($scope.question_type != "default") {
            console.log($scope.question_type);     
            $scope.form.form_fields.splice(0, $scope.form.form_fields.length);
            $scope.addField.lastAddedID = 0;
        } 
    }

    $scope.add_choice = function() {

        // incr field_id counter
        $scope.addField.lastAddedID++;

        var newField = {
            "field_id" : $scope.addField.lastAddedID
          , "field_title" : "New field - " + ($scope.addField.lastAddedID)
          , "field_value" : "Option Value " + ($scope.addField.lastAddedID)
          , "field_type" : $scope.question_type
        };

        $scope.form.form_fields.push(newField);  
    }

    $scope.create_form = function() {
        var data = {
            'name': $scope.form_name
          , 'name_id': $scope.form_name.split(' ').join('_').toLowerCase().replace(/[!?*^%@.-]/g, '')
          , 'post': $scope.form_data
        };
        
        if($scope.form_name) { 
            $http.post('/game/create_form', data)
                 .success(function(data, status, headers, config) {
                     $scope.form_data = data;
                 });     
        }
    }

    $scope.create_question = function() {

        $scope.form_create = true; 
        
        var data = {
            "fields": $scope.form.form_fields.map(function(v) {
                v.field_key = v.field_value.split(' ').join('_').toLowerCase().replace(/[!?*^%@.-]/g, '');
                return v;
            })
          , "type": $scope.question_type
          , "question": $scope.question
          , "form_data": $scope.form_data
        }

        if($scope.question) {
            $http.post('/game/create_question', data);     
        }
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));     
    }
    return text;
}
