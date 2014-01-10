angular.module('Directives', ['roomButton', 'console'])
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
})
.directive('clicker', function(Events) { 
    return {
        restrict: 'E'
      , templateUrl: "/game/buttons"
      , scope: { d: "=d" }
      , controller: function($scope, $element, $attrs) {
            
            $scope.$watch('d', function() {
                if($scope.d)  {
                    //room desc is pushed back to GameCtrl for notification rendering
                    $scope.$emit('push-message', $scope.d.desc);  
                }    
            })

            $scope.action = function(obj, key) {
                var d = obj.main;
                if(key in obj.actions) {

                    var func = obj.actions[key];

                    if(_.isFunction(func)) {
                        func.call();     
                    }
                   
                }
               
                //emits to events service
                $scope.$emit('send-room-object', d);
            }
        }
      , link: function(scope, element, attrs) {}
    }
})
