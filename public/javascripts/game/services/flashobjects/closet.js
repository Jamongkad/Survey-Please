angular.module('Closet', [])
.service('Closet', function($rootScope) { 
    function Closet() {

        var that = this;

        this.desc = "A large wooden closet. It looks quite antique but otherwise kept in good shape. ";

        this.open = function() { 
            var msg = "The closet is as spartan as the room. You find a plain white tshirt and pajamas neatly folded ." + 
                      "A few clothes hangers on the closet hanger. " + 
                      "Apart from that nothing seems out of the ordinary. ";
            $rootScope.$broadcast("push-message", msg);
        }

    }

    return new Closet();
})
