angular.module('Room', ['Area', 'Window', 'Door', 'Desk', 'Player', 'Note'])
.service('Room', function($rootScope, Area, Window, Door, Desk, Player, Note) { 

    //bind room objects to rootScope so that other services may access them.
    $rootScope.area = Area;
    $rootScope.frost_window = Window;
    $rootScope.door = Door;
    $rootScope.desk = Desk;
    $rootScope.player = Player;
    $rootScope.note = Note;

    //objects inside the room
    var room = [
        {   'room': 'self'
          , 'main': Player
          , 'actions': {
                'calm down': Player.calm_down
            }
        }
      , {   'room': 'area'
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
      , {   'room': 'desk' 
          , 'main': Desk
          , 'actions': {
                'piece of paper': Desk.read_paper
              , 'envelope': Desk.read_letter
              , 'desk lamp': Desk.operate_lamp
            }  
        }
      , {   'room': 'note' 
          , 'main': Note
          , 'actions': {
                'read note': Note.read
            }
        }
    ];

    $rootScope.room = room;

    return room;
});
