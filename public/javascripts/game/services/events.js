angular.module('Events', [])
.service('Events', function($rootScope) {

    var events = {}
 
    events.run = function() { 
        var cnt = 0;
        var knock = setInterval(function() { 
            cnt = cnt + 1;
            if(cnt == 50) {
                console.log("reset count!");
                cnt = 0;
                knock = null;
            }
            console.log("knock knock " + cnt);
        }, 2000);
    }

    return events;
})

