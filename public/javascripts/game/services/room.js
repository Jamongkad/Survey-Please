angular.module('Room', ['Area', 'Window', 'Door', 'Desk'])
.service('Room', function($rootScope, Area, Window, Door, Desk) { 

    //objects inside the room
    var room = [
        {   'room': 'area'
          , 'main': Area
        }
      , {   'room': 'window'
          , 'main': Window
          , 'actions': {
                'open window': Window.open
            } 
        }
      , {   'room': 'door'
          , 'main': Door
          , 'actions': {
                'open door': Door.open
            } 
        }
      , {  'room': 'desk' 
          , 'main': Desk
          , 'actions': {
                'piece of paper': Desk.read_paper
              , 'envelope': Desk.read_letter
              , 'desk lamp': Desk.operate_lamp
            }  
        }
    ];

    return room;
});
