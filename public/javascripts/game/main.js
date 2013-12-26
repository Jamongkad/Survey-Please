var app = angular.module("Main", ['Services', 'Directives', 'ngRoute', 'console', 'CompileHtml']);

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
