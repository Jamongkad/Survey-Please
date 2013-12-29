angular.module('console', [])
.directive('consoleBox', function() {
    return {
        restrict: 'A'     
      , link: function($scope, element, attrs) {

            $scope.$on("changes", function(ev, val) {
                console.log(val);

                $(element).tinyscrollbar();     
                $(element).tinyscrollbar_update();
            })
        }
    }    
})
.directive('console', function($compile, $sce) { 
    return {
        restrict: 'E'     
      , templateUrl: '/game/console_item'
      , scope: { m: "=m" }

      , controller: function($scope, $element, $attrs) {

        }

      , link: function($scope, element, attrs) {
        
            $scope.$watch('m', function(val) {
                element.html($scope.m.text);     
                $compile(element.contents())($scope);
                $scope.$emit("changes", "tiny pwets");
            });
 
        }
    }
})
