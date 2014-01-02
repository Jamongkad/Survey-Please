angular.module('Events', [])
.service('Events', function($rootScope) {

    var events= {}
    events.obj = null;
    events.controller_scope = null;

    events.set_scope = function(scope) {
        events.controller_scope = scope;
    }

    events.set_object = function(obj) {
        events.obj = obj; 
    }
    
    events.run = function() {
        if(events.obj) {
            var obj_name = events.obj.constructor.name;

            if(obj_name == 'Door' || obj_name == 'Window') {
                if(events.obj.attempts == 2) {
                    $rootScope.$broadcast('reveal-object', {
                        'name': 'desk'
                      , 'buttonClick': function() { 
                            events.controller_scope.foo = "Mathew Ultra!!!!!";
                        } 
                    });
                } 
            }
        } 
    }

    return events;
})
