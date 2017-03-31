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

    })