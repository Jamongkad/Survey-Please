angular.module('Directives', ['roomButton', 'console', 'commandline'])
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
                    $scope.$emit('push-message', $scope.d.main.desc);
                }    
            })

            //fires object action...
            $scope.action = function(key) {
                var d = $scope.d;

                if(key in d.actions) {
                    var func = d.actions[key];
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
.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    }
})
