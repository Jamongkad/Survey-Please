angular.module('Window', [])
.service('Window', function($rootScope) { 
    //Window logic
    function Window() {

        this.lock = true;
        this.attempts = 0;

        this.open = function() {
            console.log(this.lock);
            console.log(this.attempts++);            
        }

        this.obj_status = function() {
            if(this.lock)  {
                return 'You attempt to open the window. But it has accumulated too much rust over the years to be of any use.';
            } 
        }
    }

    return new Window();
});
