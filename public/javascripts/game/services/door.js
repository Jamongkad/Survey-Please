angular.module('Door', [])
.service('Door', function($rootScope) { 
    //Door logic
    function Door() { 

        this.lock = true;
        this.attempts = 0;

        this.open = function() {
            console.log(this.lock);
            console.log(this.attempts++);
        }

        this.obj_status = function() {
            if(this.lock)  {
                if(this.attempts > 0) {
                    return 'You attempt to open the door again. It is still locked.';     
                } else {
                    return 'You attempt to open the door. It is locked.';     
                }             
            } 
        }
    }

    return new Door();
});
