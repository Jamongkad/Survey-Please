angular.module('Area', [])
.service('Area', function($rootScope) { 

    function Area() {

        this.desc = 'Vision hazy. You rub your eyes to get a clearer picture. ' + 
                    'Something about this room doesn\'t feel right. Though plain in appearance. You suspect it was intentionally constructed to drive people mad via sheer dullness. ' + 
                    'Where are you? And why are you here? Questions you hope to find an answer soon. ' + 
                    'But for the mean time you set your mind on your escape. ' +
                    'The last thing you want is to stay here long enough for your sanity to run dry. ' + 
                    'You quickly scan your surroundings to find anything that should give you a clue on how to get out of here.' + 
                    'A frosted <i>window</i> can be seen beside your bed. ' +
                    'Looking further you find a <i>desk</i> across the room situated beside the <i>door.</i> ';

    }

    return new Area();
});
