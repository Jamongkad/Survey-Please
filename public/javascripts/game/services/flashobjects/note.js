angular.module('Note', [])
.service('Note', function($rootScope) { 
    function Note() { 

        this.desc = 'You pick up the note.';

        this.read = function() { 

            var msg = "<blockquote>" + 
                      "You are a murderer. I am going to make you suffer the way you made HER suffer. " +
                      "You must be wondering why you're here? I suppose the game won't be as fun without giving you a chance to escape your predicament. " + 
                      "So go ahead...the door is unlocked. " + 
                      "</blockquote>";

            $rootScope.door.lock = false;

            $rootScope.$broadcast('push-message', msg);  
            
            //hoooooleeeeeee shiiiiiiiit
            /*
            var r = "door";

            var find = _.find($rootScope.room, function(obj) { 
                return obj.room == r;
            });

            find.main.fart = function() { 
                $rootScope.$broadcast('push-message', "You fart at that fat Martie!");  
            }

            find.actions["fart at martie"] = find.main.fart; 
            */

        }
    }

    return new Note();
});
