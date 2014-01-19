angular.module('Closet', [])
.service('Closet', function($rootScope) { 
    function Closet() {
        this.desc = "A closet.";
    }

    return new Closet();
})
