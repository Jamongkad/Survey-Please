angular.module('Player', [])
.service('Player', function($rootScope) { 
    function Player() {
        
        this.desc = "You check yourself...";

        this.calm_down = function() {
          
        }
    }

   return new Player();
});
