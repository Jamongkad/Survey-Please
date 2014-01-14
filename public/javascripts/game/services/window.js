angular.module('Window', [])
.service('Window', function($rootScope) { 
    //Window logic
    function Window() {

        var lock = true;
        var attempts = 0;
        this.desc = 'The frosting on the window prevents you from looking outside. It is enough, for the mean time, to provide light for the entire room.';

        this.open = function() { 
            var msg = "You try with all your might to no avail. The window won't budge.";
            $rootScope.$broadcast('push-message', msg);  
        }

        this.obj_status = function() {}
    }

    return new Window();
});
