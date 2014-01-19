angular.module('console', [])
.directive('lookup', function() {    
    return {
        restrict: 'EAC'     
      , template: '<a href="http://www.youtube.com/watch?v=071KqJu7WVo&feature=player_embedded#at=41">look up</a>'
      , controller: function($scope, $element, $attrs) {

        }
      , link: function(scope, element, attrs) {
            $(element).bind('click', function(e) {
                var href = $('a', this).attr('href');

                $.fancybox({
                    'padding': 0,
                    'autoScale': false,
                    'transitionIn': 'none',
                    'transitionOut': 'none',
                    'width': 680,
                    'height': 495,
                    'href': href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                    'type': 'swf',
                    'swf': {
                        'wmode': 'transparent',
                        'allowfullscreen': 'true'
                    }
                });
                
                e.preventDefault();
            })
        }
    }
})
.directive('consoleBox', function() {
    return {
        restrict: 'A'     
      , link: function(scope, element, attrs) {
            /*
            scope.$on("changes", function(ev, val) {
                $(element).tinyscrollbar();     
                $(element).tinyscrollbar_update();
            })
            */
        }
    }    
})
.directive('console', function($compile, $rootScope) { 
    return {
        restrict: 'E'     
      //, templateUrl: '/game/console_item'
      , scope: { m: "=m" }
      , controller: function($scope, $element, $attrs) { 
        }
      , link: function($scope, element, attrs) { 
            $scope.$watch('m', function(val) {
                element.html($scope.m.text);     
                $compile(element.contents())($scope.$parent);
                $scope.$emit("changes");
            }); 

        }
    }
})
