'use strict';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const LANG = '&lang=fr';
const UNIT = '&units=metric';
const API_KEY = '&APPID=1bb8b9643fcf40f10d845bc78c254b76';
var app = angular.module("weatherMood.components", []);
app.component("userView", {

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

app.component("channelView", {

    templateUrl: '/channel.html',

    controller: ['$scope', function ($scope) {

        function onPlayerLoaded(id) {
            DZ.player.playPlaylist(id)
        };
        window.dzAsyncInit = function () {
            DZ.init({
                appId: '8',
                channelUrl: 'http://localhost:8080/channel.html',
                player: {
                    container: 'player',
                    playlist: true,
                    width: 650,
                    height: 300,
                    onload: onPlayerLoaded
                }
            })

                (function () {
                    var e = document.createElement('script');
                    e.src = 'http://e-cdn-files.deezer.com/js/min/dz.js';
                    e.async = true;
                    document.getElementById('dz-root').appendChild(e);
                });
        }
   
    }]
})



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