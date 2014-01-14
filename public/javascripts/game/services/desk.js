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
                msg = "You struggle to read the words printed on the paper. It is much too dim.";
            } else { 
                msg = "You read the piece of paper, it is a chat log of some sort.<br/><br/>" + 
                          "[o__o]: Hey are you there? <br/>" + 
                          "[o__o]: I've been talking to [^__^] recently. <br/>" + 
                          "[*__*]: Oh? how she doing these days?<br/>" + 
                          "[o__o]: She's been better. Looks like she's checking out of rehab in the next couple of days. <br/>" + 
                          "[*__*]: Oh wow so are we looking to meet up with her for coffee? <br/>" + 
                          "[o__o]: I've been planning to. Hey do me a favor and don't mention [O__O] to her okay? <br/>" +
                          "[*__*]: Alright although he's going to found out eventually. <br/>" + 
                          "[o__o]: Better he find out himself than coming from us. <br/>" + 
                          "[*__*]: .....okay.";
            } 
            $rootScope.$broadcast('push-message', msg);  
        }

        this.read_letter = function() { 

            if(me.lamp == "off") {
                msg = "You struggle to read the letter. It is much too dim.";
            } else { 
               msg = "You open the envelope. Inside it contains a letter. " + 
                     "Crudely written, the contents of the letter, sends a chill down your spine. <br/>" + 
                     '"Your killed her..."' 
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