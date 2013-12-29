function GameCtrl($scope, $http, Game) {
    
    $scope.ticks = 0;    

    //door attempts
    $scope.door_attempts = 0;
    
    //menu show/hide
    $scope.hide_scream = false;
    $scope.hide_why    = true;
    $scope.hide_door   = false;
    
    //autoclick array container
    $scope.autoclicker = [];
    
    //player stats
    $scope.action   = 100;
    $scope.will     = 300;
    $scope.insanity = 0;
    $scope.panic    = 0;
    $scope.stamina  = 10;

    $scope.msgs = [{'text': 'You find yourself in small room. It is empty.'}, {'text': 'What am I doing here?'}];

    $scope.$on('reveal-why', function(ev, val) {
        $scope.hide_why = false;
        $scope.panic = $scope.panic + 10;     
        $scope.insanity = $scope.insanity + 5;     
    })

    $scope.$on('delete-note', function(ev, val) {
        $scope.delete_msg(val);
    });

    $scope.delete_msg = function(val) { 
        var position = $scope.msgs.indexOf(val);
        if(~position) $scope.msgs.splice(position, 1);
    }

    $scope.look_at_door = function() { 
        /*  
        $.ajax({
            type: "GET"
          , url: "/game/door_desc"
          , success: function(msg) {  
                bootbox.alert(msg);    
            }
        })
        */

        $scope.add_msg({'text': 'A large door stands infront of you. It\'s locked.'});
    }

    $scope.look_at_window = function() { 
        /*
        $('#element-to-pop').bPopup({
            content: 'image'
          , loadUrl:'/images/creepywindow.jpg'
        });           
        */
        $scope.add_msg({'text': 'A smoky window stands before you. It is rusted shut.'});
    }

    $scope.open_door = function() {      

        $scope.add_msg({'text': "You attempt to open the door. It won't budge."});
        $scope.stamina = $scope.stamina - 1; 
        /*
        if($scope.door_attempts == 30) {
            $scope.hide_scream = true;
            $scope.add_msg({'text': 'You find a note. <a href="#" ng-click="read_note($event)">read it?</a>'}); 
        }
 
        if($scope.door_attempts == 100) { 
            $scope.hide_door = true;
            $scope.stamina = $scope.stamina - 3;
            $scope.add_msg({'text': 'You are too tired to open the door'}); 
        }
        */
      
    }

    $scope.open_window = function() {       
        $scope.add_msg({'text': "You attempt to open the window. It won't budge."});
        $scope.stamina = $scope.stamina - 1; 
    }

    $scope.scream = function() { 
        $scope.add_msg({'text': "You scream for help. Nobody seems to be there."})
        $scope.panic = $scope.panic + 5;
        $scope.hide_scream = false;
    }

    $scope.why = function() { 
        var kill_text = {'text': "Killed her? What are you talking about? I didn't kill anyone"};
        $scope.add_msg(kill_text);
        $scope.hide_why = true;
    }
    
    //deprecated
    $scope.trim_msgs = function() { 
        if($scope.msgs.length >= 10) {
            $scope.msgs.pop();
        }
    }

    $scope.add_msg = function(text) {
        if(_.findWhere($scope.msgs, text) == null) {
            $scope.msgs.unshift(text);     
        } 
    }
    
    var gameover = false
    //timer 
    setInterval(function() { 

        if($scope.will != 0) {
            $scope.will--;     
        } else {
            gameover = true
        }
        $scope.$apply(); 

    }, 2000);

    Game.gameover = false;
    Game.logic = function() {
        if(gameover) {
            bootbox.alert("<h2>You died...</h2>");    
            $scope.msgs = [];
            $scope.$apply();
        }
        Game.gameover = gameover;
    }
   
}

function find_place(x, n) {
    return x >= 10 ? find_place(x / 10, (n || 1) * 10) : n || 1;
}
