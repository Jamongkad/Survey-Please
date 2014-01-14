angular.module('Door', [])
.service('Door', function($rootScope) { 
    //Door logic
    function Door() { 

        var lock = true;
        var attempts = 0;
        this.desc = 'A wooden door.';

        this.open = function() {
            var msg = "You walk across the room to open the door. Upon reaching it you twist the knob to no avail. The door is lock.";
            $rootScope.$broadcast('push-message', msg);  
        }

        this.obj_status = function() {}
    }

    return new Door();
});
