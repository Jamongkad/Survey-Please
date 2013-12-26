function GameCtrl($scope, $http, $compile, Game) {

    $scope.ticks = 0;
    $scope.options = false;
    $scope.hide_scream = false;
    $scope.autoclicker = []
    $scope.timer = 10;

    $scope.msgs = [{'text': 'What am I doing here?'}];

    $scope.$on('update-msg', function(ev, val) { 
        $scope.trim_msgs();
        $scope.msgs.unshift(val);
    });

    $scope.scream = function() { 
        $scope.trim_msgs();
        $scope.msgs.unshift({'text': "You scream for help. Nobody seems to be there."});
        $scope.hide_scream = true;
    }

    $scope.trim_msgs = function() { 
        if($scope.msgs.length >= 10) {
            $scope.msgs.pop();
        }
    }

    Game.gameover = false;
    Game.logic = function() {
        /*
        if($scope.ticks >= 100) {
            $scope.ticks++;
        }
        */

        if($scope.ticks >= 15) {
            $scope.options = true;     
        }
        $scope.$apply(); 
    }
   
}
