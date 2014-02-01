angular.module('Phone', [])
.service('Phone', function($rootScope, $modal) {
    function Phone() {
        var that = this;
        var timeout;

        that.desc = "A 50's style dial-up phone.";        

        that.pickup = function() {      

            $rootScope.$broadcast("push-message", "You pick up the <i>phone</i>.");
            
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: ModalInstanceCtrl 
            });

        }
    }

    return new Phone();
});

function ModalInstanceCtrl($scope, $modalInstance, $rootScope, $http) {

    $scope.title = "A 50's style dial-up phone.";        

    $scope.load_dialog = function(id) { 
        $http.get('/convo/convo_start/' + id).success(function(data) {
            $scope.data = data;
            for(i in data) {
                $scope.text = i;
                $scope.msg = data[i];
            }
        }); 
    }

    $scope.load_dialog(1);

    $scope.action = function(act, $event) {
        $scope.load_dialog(act.to_node);
        $event.preventDefault();
    }
}
