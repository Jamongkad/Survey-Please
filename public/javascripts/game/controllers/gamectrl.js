function GameCtrl($scope, $http, Game) {

    $scope.ticks = 0;
    $scope.options = false;
    $scope.autoclicker = []
    $scope.timer = 10;

    $scope.msgs = ['What am I doing here?'];

    $scope.$on('update-msg', function(ev, val) {
        $scope.msgs.push(val);
    });

    Game.gameover = false;

    Game.logic = function() {
        /*
        if($scope.ticks >= 10) {
            Game.gameover = true     
        }
        */
        $scope.$apply(); 
    }
   
}
