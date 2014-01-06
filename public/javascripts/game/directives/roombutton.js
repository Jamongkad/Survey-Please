angular.module('roomButton', [])
.directive('roomButton', function() {
    return {
        restrict: 'E'
      , scope: { d: "=d" }
      , template: '<button class="btn" ng-click="buttonClick()">{{d.name}}</button>'
      , controller: function($scope, $attrs, $element) {
            for(var key in $scope.d) { 
                //this is cool
                if(key != "name") {
                    $scope[key] = $scope.d[key];     
                }
            }
        }
    }
});
