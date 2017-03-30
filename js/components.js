'use strict';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const LANG = '&lang=fr';
const UNIT = '&units=metric';
const API_KEY = '&APPID=1bb8b9643fcf40f10d845bc78c254b76';

/**
 * The weatherMood components
 */
angular.module("weatherMood.components", [])

    .component("userView", {

        templateUrl: '/user.html',

        bindings: {
            city: '@',
        },

        controller: ['$http',

            function ($http) {

                this.model = {
                    city: '',
                    weather: '',
                    iconUrl: '',
                    temp: ''
                };

                this.fetchWeather = () => {
                    $http({
                        method: 'GET',
                        url: API_URL + this.model.city + LANG + UNIT + API_KEY
                    }).then((response) => {
                        console.log(response);
                        this.model.weather = response.data.weather[0].description;
                        this.model.iconUrl = 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png';
                        this.model.temp = response.data.main.temp;
                    });

                    this.displayWeather(this.model.weather)
                }

                this.displayWeather = (param) => {

                }
            }
        ]
    })

// .component("historyView", {

//     templateUrl: '/history.html',

//     bindings: {
//         list: '<',
//         query: '@',
//         newItem: '@',
//     },

//     controller: ['historyCtrl', function (historyCtrl) {}]
// })

// .component("channelView", {

//     templateUrl: '/channel.html',

//     bindings: {
//         list: '<',
//         query: '@',
//         newItem: '@',
//         allChecked: '<'
//     },

//     controller: ['channelCtrl', function (channelCtrl) {}]
// })

// .component("weatherView", {

//     templateUrl: '/weather.html',

//     bindings: {
//         list: '<',
//         query: '@',
//         newItem: '@',
//         allChecked: '<'
//     },

//     controller: ['weatherCtrl', function (weatherCtrl) {}]
// })