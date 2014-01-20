angular.module('Bathroom', [])
.service('Bathroom', function($rootScope) {
    function Bathroom() {

        var that = this;

        this.desc = "There is nothing special about your bathroom. It is clean and looks like it hasn't been used yet. ";

        this.check_mirror = function() {
            $rootScope.$broadcast("push-message", "You look at yourself in the mirror. ");
        }

        this.check_cabinet = function() { 
            $rootScope.$broadcast("push-message", "You check the medicine cabinet. ");
        }

        this.check_shower = function() { 
            $rootScope.$broadcast("push-message", "Nothing seems to be out of place. ");
        }

    }

    return new Bathroom();
})
