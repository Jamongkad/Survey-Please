angular.module('console', [])
.directive('console', function($compile, $sce) { 
    return {
        restrict: 'E'     
      , templateUrl: '/game/console_item'
      , scope: { m: "=m" }

      , controller: function($scope, $element, $attrs) {

            $scope.read_note = function($event) {

                bootbox.alert("<h2>You killed her.</h2>", function() {
                    $scope.$emit('reveal-why');
                    $scope.$emit('delete-note', $scope.m);
                });

                $event.preventDefault();
            }

        }

      , link: function($scope, element, attrs) {
        
            $scope.$watch('m', function(val) {
                element.html($scope.m.text);     
                $compile(element.contents())($scope);
            });
 
        }
    }
});
