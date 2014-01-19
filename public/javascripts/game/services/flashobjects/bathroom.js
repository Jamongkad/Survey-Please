angular.module('Bathroom', [])
.service('Bathroom', function($rootScope) { 
    function Bathroom() {
        this.desc = "A bathroom.";
    }

    return new Bathroom();
})
