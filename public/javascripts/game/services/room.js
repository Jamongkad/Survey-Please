angular.module('Room', ['Window', 'Door', 'Desk'])
.service('Room', function($rootScope, Window, Door, Desk) { 

    //objects inside the room
    var room = [
        {   'room': 'window'
          , 'desc': 'An old window that looks like it has seen better days.'
          , 'main': Window
          , 'actions': {
                'open': false
            } 
        }
      , {   'room': 'door'
          , 'desc': 'A wooden door stands infront of you.'
          , 'main': Door
          , 'actions': {
                'open': true
            } 
        }
      , {  'room': 'desk' 
          , 'desc': 'A simple mahogany desk. Several items are strewn on the surface.'
          , 'main': Desk
          , 'actions': {
                'chat log': Desk.read_chat
              , 'letter': Desk.read_letter
              , 'desk lamp': Desk.operate_lamp
            }  
        }
    ];

    return room;
});
