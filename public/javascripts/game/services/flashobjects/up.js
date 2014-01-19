angular.module('Up', [])
.service('Up', function($rootScope) { 
    function Up() {
        this.desc = "You slowly lift your eyes. You are shocked to find the room's ceiling transform itself to black nothingness. " + 
                    "It is as if you are looking into a portal that is devoid of light. Silent and foreboding. " +
                    "As you continue to stare into the abyss you cannot help but notice the ceiling closing in on you.  " +
                    "You want to panic but you feel all your emotions drain. You to scream but the air around you is so thick. " +
                    "Your breathing becomes heavy and you fall on your knees. You feel your strength slowly draining away. " +
                    "The world around you begins to fade as the abyss draws closer to you. The slow creeping of the darkness is maddening. " +
                    "As the abyss creeps closer your vision begins to fade into darkness. <br/><br/>" + 
                    "Then...nothing.";

        this.wake_up = function() {
            
        }
    }

    return new Up();
})
