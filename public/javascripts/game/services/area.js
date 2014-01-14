angular.module('Area', [])
.service('Area', function($rootScope) { 

    function Area() {

        this.desc =  'Vision hazy. You rub your eyes to get a clearer picture. ' + 
                    'Something about this room doesn\'t feel right. Though plain in appearance. It feels as if it was created to drive you mad by sheer dullness. ' + 
                    'What is the purpose of this room? And why are you here? Questions you hope will be answered soon. ' + 
                    'For the mean time you set your mind on getting out of this room before something happens. ' +
                    'Or rather getting out to make something happen? Either way anywhere is preferable than here. ' + 
                    'You slowly scan your surroundings. ' + 
                    'A frosted <i>window</i> can be seen beside your bed. ' +
                    'Looking further you find a <i>desk</i> across the room situated beside the <i>door.</i> ';

    }

    return new Area();
});
