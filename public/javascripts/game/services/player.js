angular.module('Player', [])
.service('Player', function($rootScope) { 
    function Player() {
        
        this.desc = "You check yourself...";

        var count = 0;

        this.calm_down = function() {   
            
            var msg;           
            if(count >= 5) {
                msg = "You are already calm enough.";      
                setTimeout(function() {
                    count = 0; 
                }, 1000 * 5);
            } else {
                msg = "You make an conscious effort to calm down.";     
                $rootScope.$broadcast('calm-player');
            }
            count++;
            $rootScope.$broadcast('push-message', msg);  
        }
    }

   return new Player();
});
