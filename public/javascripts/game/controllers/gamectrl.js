function GameCtrl($scope, $http, Game, Room, Events) {
 
    $scope.ticks = 0;    
    $scope.foo = "Mathew Super";

    //door attempts
    $scope.door_attempts = 0;
    
    //menu show/hide
    $scope.hide_scream = false;
    $scope.hide_why    = true;
    $scope.hide_door   = false;
    
    //autoclick array container
    $scope.autoclicker = [];
    
    //player stats
    $scope.parentobj = {};
    $scope.parentobj.action   = 100;
    $scope.parentobj.will     = 300;
    $scope.parentobj.insanity = 0;
    $scope.parentobj.panic    = 0;
    $scope.parentobj.stamina  = 10;

    $scope.msgs = [{'text': 'You find yourself in small room.'}];
    $scope.branches = [];

    $scope.$on('branching', function(ev, val) {
        $scope.branches.push(val);
    });
    
    $scope.$on('delete-note', function(ev, val) {
        $scope.delete_msg(val);
    });

    $scope.$on('push-message', function(ev, val) {
        $scope.add_msg({'text': val});
        //debug message for scrollbar
        //$scope.msgs.unshift({'text': val});     
    });

    //run events loop and grab current scope
    Events.run();

    $scope.delete_msg = function(val) { 
        var position = $scope.msgs.indexOf(val);
        if(~position) $scope.msgs.splice(position, 1);
    }

    $scope.open = function(path_object) {
        
        var find = _.find(Room, function(obj) { 
            return obj.room == path_object;
        });
    
        if(find) {
            $scope.actions = find;     
        }
        
    }

    $scope.read_note = function($event) {
        console.log("Reading from GameCtrl");
        $event.preventDefault();
    }

    $scope.scream = function() { 
        $scope.add_msg({'text': "You scream for help. Nobody seems to be there."})
        $scope.panic = $scope.panic + 5;
        $scope.hide_scream = false;
    }

    $scope.why = function() { 
        $scope.add_msg({'text': "Killed her? What are you talking about? I didn't kill anyone"});
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
    //timers will
    var will = setInterval(function() { 
        if($scope.parentobj.will != 0) {
            $scope.parentobj.will--;     
        } else {
            gameover = true
            clearInterval(will);
        }
        $scope.$apply(); 
    }, 2000);

    Game.gameover = false;
    Game.logic = function() {
        if(gameover) {
            bootbox.alert("<h2>Game Over</h2>");    
            $scope.msgs = [];
            $scope.$apply();
        }
        Game.gameover = gameover;
    }
   
}
