angular.module('commandline', [])
.directive('commandLine', function(Room) {
    return {
        restrict: 'E'     
      , template: '<input type="text" class="form-control" placeholder="look or inspect object" ng-model="command" ng-enter="capture()"/>' 
      , controller: function($scope, $element, $attrs) { 

            $scope.command = "";

            $scope.capture = function() {

                var text = $scope.command;
                var commands = text.split(" ");
                var command = commands[0];
                var object = commands[1];

                if($scope.command != "" && object && (command == "touch" || command == "inspect" || command == "look")) {  
                    if(command == "look" || command == "inspect") { 
                        var find = _.find(Room, function(obj) { 
                            if(object == "room") {
                                return obj.room == "area";
                            }
                            return obj.room == object;
                        });
                        //$(".viewport").highlight(object, {element: 'a'});
                        console.log(find);
                        $scope.$emit('send-order', find);
                    }
                }
                
                $scope.command = "";
            }
        }
       , link: function(scope, element, attrs) {
             $('.form-control', element).focus();
         }
    } 
});
