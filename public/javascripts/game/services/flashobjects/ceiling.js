angular.module('Ceiling', [])
.service('Ceiling', function($rootScope) { 
    function Ceiling() {

        var that = this;
 
        this.desc = "You slowly lift your eyes. You are shocked to find the room's ceiling transform itself to black nothingness. " + 
                    "Like a portal that is devoid of light. Silent and foreboding. " +
                    "You cannot help but notice the ceiling closing in on you.  " +
                    "You want to panic but you feel all your emotions drain. You try to scream but the air around you is so thick. " +
                    "Your breathing becomes heavy and you fall on your knees. You feel your strength slowly draining away. " +
                    "The world around you begins to fade as the abyss draws closer to you. The slow creeping of the darkness is maddening. " +
                    "As the abyss creeps closer your vision begins to fade into darkness. Then nothing.";

        var attempts = 0;
        var timeout;

        this.wake_up = function() {        
            var msg = "You find yourself on the floor of your <i>room</i>. " + 
                      "You do not know how long you've passed out. All you can remember is the impending darkness. " + 
                      "You are determined to find a way out. ";

            //delete long ass desc lol
            that.desc = "There is nothing special about the ceiling. ";
            
            //delete wake up method...cuz you already woke up...
            delete $rootScope.room[6].actions['wake up'];

            $rootScope.$broadcast('push-message', msg);  
            
            if(timeout) {
                clearTimeout(timeout); 
            }

            timeout = setTimeout(function() { 
                $rootScope.$broadcast('push-message', "You hear something. It is coming from the <i>closet</i>.");  
                $rootScope.$broadcast('activate-closet');  
            }, 4000);
        }
    }

    return new Ceiling();
})
