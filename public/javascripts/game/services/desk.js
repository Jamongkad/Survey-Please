angular.module('Desk', [])
.service('Desk', function($rootScope) { 
    function Desk() { 

        this.lock = true;
        this.attempts = 0;
        this.msg = "";

        this.read_chat = function() {
            //emits to gamectrl
            $rootScope.$broadcast('push-message', "Reading chat");  
        }

        this.read_letter = function() { 
            //emits to gamectrl
            $rootScope.$broadcast('push-message', "Reading letter");  
        }

        this.operate_lamp = function() {
            $rootScope.$broadcast('push-message', "Operating Lamp.");  
        }

    }

    return new Desk();
});
