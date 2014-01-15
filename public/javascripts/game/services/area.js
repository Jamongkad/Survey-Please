angular.module('Area', [])
.service('Area', function($rootScope) { 

    function Area() {
        this.desc = '<p>Something about this room doesn\'t feel right. Though plain in appearance. You suspect it was intentionally constructed to contain people. Much like how an asylum masquerades as an hospital for the mentally ill. ' + 
                    'Where are you? And why are you here? are just a few out of a thousand questions that fill your head. ' + 
                    'The last thing you want is to stay here long enough for your sanity to run dry. ' + 
                    'You quickly scan your surroundings. ' + 
                    'A frosted <i>window</i> can be seen beside your bed. ' +
                    'Looking further you find a <i>desk</i> across the room situated beside the <i>door.</i></p>' 

    }

    return new Area();
});
