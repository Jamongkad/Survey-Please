var app = angular.module("Main", ['Services', 'Directives', 'ngRoute', 'CompileHtml', 'ngSanitize']);

app.config(function($routeProvider) {
    $routeProvider   
        .when('/', { 
            controller: "GameCtrl"
          , templateUrl: "/game/main"
        })
        .otherwise({
            redirectTo: '/'     
        });
});
