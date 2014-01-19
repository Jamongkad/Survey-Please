angular.module('Door', [])
.service('Door', function($rootScope) { 
    //Door logic
    function Door() { 
        
        this.lock = true;
        this.attempts = 0;
        this.desc = 'Across the room lies a wooden door.';

        var me = this;

        this.open = function() {
            if(me.lock) { 
                var msg = "You walk across the room to open the door. Upon reaching it, you twist the knob, to only find out it is locked.";
                $rootScope.$broadcast('push-message', msg);  
            } else {
                var msg = "You walk across the room to open the door. Upon reaching it. You twist the knob. It opens..." + 
                          "much to your dismay a concrete wall stands infront of you. <br/>" + 
                          "A small inscription can be made out on the surface of the concrete wall. <br/>"; 
                
                //find room object and dynamically attach read method.
                $rootScope.room[3].actions["read inscription"] = me.read;
                $rootScope.$broadcast('push-message', msg);   
            }
        }

        this.read = function() { 
            var inscription = "<blockquote>" + 
                              "You want to learn more? Look up at the <i>ceiling</i>" + 
                              "</blockquote>"; 

            $rootScope.$broadcast('push-message', inscription);  
        }
    }

    return new Door();
});
