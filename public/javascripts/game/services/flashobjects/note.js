angular.module('Note', [])
.service('Note', function($rootScope) { 
    function Note() { 

        this.desc = 'You pick up the note.';

        this.read = function() { 

            var msg = "<blockquote>" + 
                      "You are a murderer. I am going to make you suffer the way you made HER suffer. " +
                      "You must be wondering why you're here? I suppose the game won't be as fun without giving you a chance to escape your predicament. " + 
                      "So go ahead...the <i>door</i> is unlocked. " + 
                      "</blockquote>";

            $rootScope.door.lock = false;

            $rootScope.$broadcast('push-message', msg);  
            
            //hoooooleeeeeee shiiiiiiiit
            /*
            var r = "door";
            var door = _.find($rootScope.room, function(obj) { 
                return obj.room == r;
            });

            door.main.read = function() { 
                var inscription = "<blockquote>" + 
                                  "You want to learn more? Look up at the <i>ceiling</i>" + 
                                  "</blockquote>"; 

                $rootScope.$broadcast('push-message', inscription);  
            }

            door.actions["read inscription"] = door.main.read; 
            */
        }
    }

    return new Note();
});
