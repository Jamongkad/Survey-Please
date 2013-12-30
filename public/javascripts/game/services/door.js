angular.module('Door', [])
.service('Door', function($rootScope) { 
    //Door logic
    function Door() {

        var lock = true;
        var attempts = 0;

        this.open = function() {
            console.log(lock);
            console.log(attempts++);
        }

        this.obj_status = function() {
            if(lock)  {
                return 'You attempt to open the door. It is locked.';
            } 
        }
    }

    return new Door();
});
