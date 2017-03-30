'use strict';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const LANG = '&lang=fr';
const UNIT = '&units=metric';
const API_KEY = '&APPID=1bb8b9643fcf40f10d845bc78c254b76';

/**
 * The recipes service
 */
angular.module('weatherMood.services', [])

    .service('CityService', ['$http',

        function ($http, city) {

            this.getWeather = function (city) {
                $http.get(API_URL + city + LANG + UNIT + API_KEY).then((response) => {
                    console.log(response.data.weather[0].description)
                });


                // this.getById = function (id) {
                //   return $http.get(API_URL + '/' + id);
                // }

                // this.save = function (recipe) {
                //   if (recipe._id) {
                //     return $http.put(API_URL + '/' + recipe._id, recipe);
                //   } else {
                //     return $http.post(API_URL, recipe);
                //   }
                // }

                // this.delete = function (recipe) {
                //   return $http.delete(API_URL + '/' + recipe._id);


            }
        }
    ]);