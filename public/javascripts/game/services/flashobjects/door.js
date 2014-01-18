angular.module('Door', [])
.service('Door', function($rootScope) { 
    //Door logic
    function Door() { 

        var lock = true;
        var attempts = 0;
        this.desc = 'Across the room lies a wooden door.';

        this.open = function() {
            var msg = "You walk across the room to open the door. Upon reaching it, you twist the knob, to only find out it is locked.";
            $rootScope.$broadcast('push-message', msg);  
        }

        this.obj_status = function() {}
    }

    return new Door();
});
