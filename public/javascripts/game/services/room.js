angular.module('Room', ['Window', 'Door'])
.service('Room', function($rootScope, Window, Door) { 

    //objects inside the room
    var room = [
        {   'room': 'window'
          , 'desc': 'A rusty window that looks like it has seen better days.'
          , 'main': Window
          , 'actions': {
                'open': false
            } 
        }
      , {   'room': 'door'
          , 'desc': 'A door stands infront of you.'
          , 'main': Door
          , 'actions': {
                'open': true
            } 
        }
    ];

    return room;
});
