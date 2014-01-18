angular.module('Note', [])
.service('Note', function($rootScope) { 
    function Note() { 
        this.desc = 'You pick up the note.';
    }

    return new Note();
});
