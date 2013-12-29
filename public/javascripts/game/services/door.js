angular.module('Door', [])
.service('Door', function($rootScope) { 
    //Door logic
    function Door() {
        this.cool = function() {
            return "Testing Irene";
        }
    }

    return new Door();
});
