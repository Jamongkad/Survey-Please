angular.module('Directives', [])
.directive('autoClicker', function() {
    
    return {
        restrict: 'E'     
      , template: '<button class="btn" ng-click="buy_auto_clicker()">Buy Clicker</button>'
      , controller: function($scope, $element, $attrs) {
            $scope.buy_auto_clicker = function() {
                $scope.ticks = $scope.ticks - 10;
                $scope.autoclicker.push({"type": "auto clicker", "clicks": 1});
            }
        }
      , link: function(scope, element, attrs) {}
    }
});

