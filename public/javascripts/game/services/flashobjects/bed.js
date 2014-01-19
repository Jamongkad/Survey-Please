angular.module('Bed', [])
.service('Bed', function($rootScope) { 
    function Bed() {

        this.desc = "A bed.";

        this.sleep = function() { 
            var msg = "You try to sleep.";
            $rootScope.$broadcast('calm-player');
            $rootScope.$broadcast('push-message', msg);  
        }
    }

    return new Bed();
})
