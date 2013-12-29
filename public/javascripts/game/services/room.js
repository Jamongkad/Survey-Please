angular.module('Room', [])
.service('Room', function($rootScope) { 
    var room = [
        {   'room': 'window'
          , 'desc': 'A rusty window that looks like it has seen better days.'
          , 'actions': {
                'open': true
            } 
        }
      , {   'room': 'door'
          , 'desc': 'A door stands infront of you.'
          , 'actions': {
                'open': true
            } 
        }
    ];

    return room;
});
