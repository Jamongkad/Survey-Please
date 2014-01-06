angular.module('Events', [])
.service('Events', function($rootScope) {

    var events = {}
 
    events.run = function() {
        /* disabled for the time being
        $rootScope.$on('send-room-object', function(ev, val) {
            var obj_name = val.constructor.name;
            var path_object;

            if(obj_name == 'Door' || obj_name == 'Window') {
                if(val.attempts == 1) { 
                    //branching goes here...    
                    path_object = 'desk';
                } 
                
                if(path_object) { 
                    var object = _.find(branch_rooms, function(obj) { 
                        return obj.name == path_object;
                    });
                    $rootScope.$broadcast('branching', object);
                }
            }
        }); 
        */
    }

    return events;
})

var branch_rooms = [
    { 
        'name': 'desk'
      , 'buttonClick': function() { 

        } 
    }
];
