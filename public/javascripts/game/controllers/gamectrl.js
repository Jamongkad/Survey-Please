function GameCtrl($scope, $http, Game, Room, Events) {
 
    $scope.ticks = 0;    
    $scope.foo = "Mathew Super"; 

    //door attempts
    $scope.door_attempts = 0;
    
    //menu show/hide
    $scope.hide_scream = false;
    $scope.hide_why    = true;
    $scope.hide_door   = false;
    
    //action repository so we can record the players actions
    $scope.playeractions = [];
    
    //player stats
    $scope.parentobj = {};
    $scope.parentobj.will     = 300;
    $scope.parentobj.insanity = 0;
    $scope.parentobj.panic    = 0;
    $scope.is_tired = false;

    $scope.msgs = [
        {'text': 'You find your<i>self</i> in small <i>room</i>.'}    
     ,  {'text': 'You must find a way to escape before your will runs dry and you go totally insane. '}
    ];

    $scope.$on('change-player-mode', function(ev, val) {
        if(_.findWhere($scope.playeractions, val) == null) { 
            for(key in $scope.parentobj) {
                if(val.hasOwnProperty(key)) {
                    $scope.parentobj[key] = $scope.parentobj[key] + val[key];
                }
            }
            $scope.playeractions.unshift(val);     
        }
    });  

    $scope.$on('calm-player', function(ev, val) {
        //just do calculations here
        if($scope.parentobj.insanity > 0)  {
            $scope.parentobj.insanity = $scope.parentobj.insanity - 1; 
        }

        if($scope.parentobj.panic > 0)  {
            $scope.parentobj.panic = $scope.parentobj.panic - 1; 
        }

        $scope.parentobj.will = $scope.parentobj.will + 1;
    });
    
    $scope.$on('send-order', function(ev, val) {
        $scope.actions = val;
    });
     
    $scope.$on('delete-note', function(ev, val) {
        $scope.delete_msg(val);
    });

    $scope.$on('push-message', function(ev, val) {
        //$scope.add_msg({'text': val});
        //debug message for scrollbar
        $scope.msgs.unshift({'text': val });   
    });

    $scope.delete_msg = function(val) { 
        var position = $scope.msgs.indexOf(val);
        if(~position) $scope.msgs.splice(position, 1);
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
    //timers will
    /* developing
    var will = setInterval(function() { 
        if($scope.parentobj.will != 0) {
            $scope.parentobj.will--;     
        } else {
            gameover = true
            clearInterval(will);
        } 
        $scope.$apply(); 
    }, 2000);
    */

    Game.gameover = false;
    Game.logic = function() {
        if(gameover) {
            bootbox.alert("<h2>Game Over</h2>");    
            $scope.msgs = [];
        }

        if($scope.playeractions.length >= 2) {  
            $scope.add_msg({
                'text': 'A knock on the door startles you. As you rush to find out who it is. ' + 
                        'You find a <i>note</i> and a plate of food and water at the foot of the door. ' + 
                        'How did they appear through a solid wooden door is a mystery. ' + 
                        'All you know, is your captor is intent on keeping you here for the time being. '
            });
        }

        if($scope.playeractions.length >= 10) {  
            //trigger player fatigue   
        };

        $scope.$apply();
        Game.gameover = gameover;
    }   
}
