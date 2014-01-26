angular.module('Room', [
    'Area', 'Window', 'Door', 'Desk', 'Player', 'Note', 'Ceiling', 'Bed', 'Closet', 'Bathroom', 'Phone'
])
.service('Room', function($rootScope, Area, Window, Door, Desk, Player, Note, Ceiling, Bed, Closet, Bathroom, Phone) { 

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
      , {   'room': 'ceiling' 
          , 'main': Ceiling
          , 'actions': {
                'wake up': Ceiling.wake_up
            }
        }
      , {   'room': 'bed' 
          , 'main': Bed
          , 'actions': {
                'sleep': Bed.sleep
            }
        } 
      , {   'room': 'closet' 
          , 'main': Closet
          , 'actions': {
                'open closet': Closet.open
            }
        }
      , {   'room': 'bathroom' 
          , 'main': Bathroom
          , 'actions': {
                'mirror': Bathroom.check_mirror
              , 'medicine cabinet': Bathroom.check_cabinet
              , 'shower': Bathroom.check_shower
            }
        }
      , {   'room': 'phone' 
          , 'main': Phone
          , 'actions': {
                'pick up': Phone.pickup
            }
        }
    ];

    //bind room objects to rootScope so that other services may access them.
    $rootScope.room = room;
    $rootScope.frost_window = Window;
    $rootScope.area     = Area;
    $rootScope.door     = Door;
    $rootScope.desk     = Desk;
    $rootScope.player   = Player;
    $rootScope.note     = Note;
    $rootScope.ceiling  = Ceiling;
    $rootScope.bed      = Bed;
    $rootScope.bathroom = Bathroom;
    $rootScope.phone    = Phone;

    return room;
});
