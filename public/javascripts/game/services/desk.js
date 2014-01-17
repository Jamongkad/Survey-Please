angular.module('Desk', [])
.service('Desk', function($rootScope) { 
    function Desk() { 

        this.desc = 'A simple mahogany desk. Several items are strewn on the surface.';

        this.lock = true;
        this.attempts = 0;
        this.msg = "";
        this.lamp = "off";

        var me = this;

        this.read_paper = function() {
            //emits to gamectrl
            var msg;
            if(me.lamp == "off") {
                msg = "The light coming from the window is not bright enough to illuminate the entire room. You struggle to read the words printed on the paper. "
            } else { 
                msg = "You read the piece of paper. It is a chat log of some sort.<br/>" + 
                      "<blockquote>" + 
                      "[o__o]: Hey are you there? <br/>" + 
                      "[o__o]: I've been talking to [^__^] recently. <br/>" + 
                      "[*__*]: Oh? how she doing these days?<br/>" + 
                      "[o__o]: She's been better. Looks like she's checking out of rehab in the next couple of days. <br/>" + 
                      "[*__*]: Oh wow so are we looking to meet up with her for coffee? <br/>" + 
                      "[o__o]: I've been planning to. Hey do me a favor and don't mention [O__O] to her okay? <br/>" +
                      "[*__*]: Alright although he's going to found out eventually. <br/>" + 
                      "[o__o]: Better he find out himself than coming from us. <br/>" + 
                      "[*__*]: .....okay." + 
                      "</blockquote>";

                $rootScope.$broadcast('change-player-mode', {'insanity': 5, 'origin': 'desk'});  
                $rootScope.$broadcast('push-message', "<i>You've lost some grip on reality.</i>");  
            } 
            $rootScope.$broadcast('push-message', msg);  
        }

        this.read_letter = function() { 

            if(me.lamp == "off") {
                msg = "The light coming from the window is not bright enough to illuminate the entire room. You struggle to read the contents of the envelope. "
            } else { 
                msg = 'You open the envelope. Inside it contains a letter. ' + 
                      'Crudely written, the contents of the letter, sends a chill down your spine. ' + 
                      "<blockquote>" + 
                      "You killed her." + 
                      "</blockquote>";

                $rootScope.$broadcast('change-player-mode', {'panic': 10, 'origin': 'desk'});  
                $rootScope.$broadcast('push-message', "<i>The hairs on the back of your neck begin to stand.</i>");  
            }

            $rootScope.$broadcast('push-message', msg);  
        }

        this.operate_lamp = function() {
            if(me.lamp == "off") {
                me.lamp = "on";
            } else { 
                me.lamp = "off";
            }
            $rootScope.$broadcast('push-message', "You switch " + me.lamp + " the desk lamp.");  
        }

    }

    return new Desk();
});
