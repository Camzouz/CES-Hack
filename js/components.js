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

    controller: ['SharedProperties', '$http',

        function (SharedProperties, $http) {

            this.model = {
                city: '',
                weather: '',
                iconUrl: '',
                temp: '',
                id: ''
            };

            this.fetchWeather = () => {
                $http({
                    method: 'GET',
                    url: API_URL + this.model.city + LANG + UNIT + API_KEY
                }).then((response) => {
                    // console.log(response);
                    this.model.weather = response.data.weather[0].description;
                    this.model.iconUrl = 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png';
                    this.model.temp = response.data.main.temp;
                    SharedProperties.property = response.data.weather[0].icon;
                    console.log(SharedProperties.property);
                });
            }
        }
    ]
})


app.component("channelView", {

    templateUrl: '/channel.html',

    controller: ['$scope', 'SharedProperties', function ($scope, SharedProperties) {

        this.model = {
            src: 'https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=false&width=700&height=90&color=007FEB&layout=&size=medium&type=playlist&id=',
            playlistId: '',
            appId: '&app_id=1',
            musicWeather: {
                "01d": 1118430371,
                "01n": 1118430371,
                "09d": 1083782741,
                "09n": 1083782741,
                "10d": 1083782741,
                "10n": 1083782741,
                "13d": 60477535,
                "13n": 60477535,
                "03d": 1290316405,
                "03n": 1290316405,
                "04d": 1290316405,
                "04n": 1290316405,
                "11d": 1159266401,
                "11n": 1159266401
            },
            id: ''
        }

        SharedProperties.setProperty(this.model.id);
        

    }]
})