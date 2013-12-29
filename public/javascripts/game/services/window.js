angular.module('Window', [])
.service('Window', function($rootScope) { 
    //Window logic
    function Window() {
        this.cool = function() {
            return "Testing Mathew";
        }
    }

    return new Window();
});
