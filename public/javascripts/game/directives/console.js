angular.module('console', [])
.directive('console', function($compile) { 
    return {
        restrict: 'E'     
      , templateUrl: '/game/console_item'
      , scope: {
            m: "=m"   
        }
      , controller: function($scope, $element, $attrs) {
            $scope.read = function($event) {
                $event.preventDefault();
            }
        }
      , link: function(scope, element, attrs) {
            scope.$watch('m', function(val) {
                element.html(scope.m.text);     
                $compile(element.contents())(scope);
            }) 
        }
    }
});
