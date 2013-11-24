angular.module("formcomponents", [])
.directive('rating', function() {
    var template = "";

    for(var i=1; i<11; i++) {
        template += '<button class="btn btn-default">' + i + '</button>'; 
    }

    return {
        restrict: "E"     
      , template: template
      , link: function(scope, element, attrs) {  
        }
    }    
})
.directive('multi', function() {      
    return {
        restrict: "E"    
      , templateUrl: '/game/multiple_view'
      , controller: function($scope, $element, $attrs) {}
      , link: function(scope, element, attrs) {}
    }    
})
.directive('fieldDirective', function($compile, $http) { 
    return {
        restrict: "E"     
      , scope: {
            field: "=field"
        }
      , controller: function($scope, $element, $attrs) {}
      , link: function(scope, element, attrs) {
            $http.get('/game/field').success(function(data) {
                element.html(data);
                $compile(element.contents())(scope);
            });           
        }
    }    
});
