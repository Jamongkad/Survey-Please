angular.module('Services', ['Room'])
.service('Game', function($rootScope) { 
    var Game = {};

    Game.fps = 60;
    Game.gameover;
    Game.logic;
    Game.initialize = function() {};

    //game draw
    Game.draw = function() {};
    //game logic

    Game.update = function() { 
        if (typeof Game.logic=="function") Game.logic();
    };


    //run game!
    Game.run = (function() {
        var loops = 0, skipTicks = 1000 / Game.fps,
        maxFrameSkip = 10,
        nextGameTick = (new Date).getTime();

        return function() {
            loops = 0;

            while (Game.gameover == false && (new Date).getTime() > nextGameTick) { 
                Game.update();
                nextGameTick += skipTicks;
                loops++;
            }
            Game.draw();
        };
    })();

    (function() {
        var onEachFrame;
        if (window.webkitRequestAnimationFrame) {
            onEachFrame = function(cb) {
                var _cb = function() { cb(); webkitRequestAnimationFrame(_cb); }
                _cb();
            };
        } else if (window.mozRequestAnimationFrame) {
            onEachFrame = function(cb) {
                var _cb = function() { cb(); mozRequestAnimationFrame(_cb); }
                _cb();
            };
        } else {
            onEachFrame = function(cb) {
                setInterval(cb, 1000 / 60);
            }
        }

        window.onEachFrame = onEachFrame;
    })();

    window.onEachFrame(Game.run);

    return Game;
});
