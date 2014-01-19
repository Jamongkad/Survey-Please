angular.module('Bed', [])
.service('Bed', function($rootScope) { 
    function Bed() {
        this.desc = "A bed.";
    }

    return new Bed();
})
