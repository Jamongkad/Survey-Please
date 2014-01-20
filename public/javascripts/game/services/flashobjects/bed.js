angular.module('Bed', [])
.service('Bed', function($rootScope) { 
    function Bed() {

        this.desc = "Your bed has a pillow and a blanket. Apart from that there is nothing out of the ordinary. ";

        this.sleep = function() { 
            var msg = "You try to sleep.";
            $rootScope.$broadcast('calm-player');
            $rootScope.$broadcast('push-message', msg);  
        }
    }

    return new Bed();
})
