angular.module('Closet', [])
.service('Closet', function($rootScope) { 
    function Closet() {

        var that = this;

        var state = false;
        $rootScope.$on('activate-closet', function() {
            state = true; 
            that.desc = "A ringing can be heard from the closet. ";     
        });
   
        this.desc = "A large wooden closet. It looks quite antique but otherwise kept in good shape. ";     
       
        this.open = function() { 
            var msg = "The closet is as spartan as the room. You find a plain white tshirt and pajamas neatly folded ." + 
                      "A few clothes hangers on the closet hanger. ";

            if(state) {
                msg += "You can see a 50's style dial-up <i>phone</i> under a secret board on the floor of the closet.";     
            }

            $rootScope.$broadcast("push-message", msg);
        }

    }

    return new Closet();
})
