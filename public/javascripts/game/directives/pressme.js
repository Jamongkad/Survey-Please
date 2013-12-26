angular.module('Directives', [])
.directive('pressMe', function() { 
    return {
        restrict: 'E'     
      , templateUrl: '/game/pressme'
      , controller: function($scope, $element, $attrs) {
            $scope.press = function() {
                $scope.ticks++;

                if($scope.ticks == 10) { 
                    $scope.$emit('update-msg', {'text': 'How did I get into this box?'});
                }

                if($scope.ticks == 20) {  
                    $scope.$emit('update-msg', {'text': 'How do I get out?'});
                }

                if($scope.ticks == 30) {  
                    $scope.$emit('update-msg', {'text': 'I am trapped!'});
                }

                if($scope.ticks == 40) {  
                    $scope.$emit('update-msg', {'text': 'Somebody help me!'});
                }

                if($scope.ticks == 50) {  
                    $scope.$emit('update-msg', {'text': 'You find a note. <a href="#" ng-click="read($event)">read it?</a>'});
                }

            }
        }
      , link: function(scope, element, attrs) {}
    }
})
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
