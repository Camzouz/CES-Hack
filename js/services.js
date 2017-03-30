'use strict';

angular.module('weatherMood.services', [])

    .service('SharedProperties', function () {

        var property = '';

        this.setProperty = function (value) {
            if (property) {
                value = property;
            }
            console.log(value);
        }
<<<<<<< HEAD
});
=======
    });
>>>>>>> 54b98785397bf9091ab344077f031e0a51b9b70f
