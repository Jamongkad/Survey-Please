angular.module('Closet', [])
.service('Closet', function($rootScope) { 
    function Closet() {

        var that = this;

        this.desc = "A large wooden closet. It looks quite antique but otherwise kept in good shape. ";

        this.open = function() { 
            $rootScope.$broadcast("push-message", "Nothing seems to be out of place. ");
        }

    }

    return new Closet();
})
