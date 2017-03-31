'use strict';




const API_KEY = '&APPID=1bb8b9643fcf40f10d845bc78c254b76';


var app = angular.module("weatherMood.components", []);
app.component("userView", {

            templateUrl: '/user.html',

            bindings: {
                city: '@',
            },

            controller: ['$http',

                function ($http) {

                    var getWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
                    var lang = '&lang=en';
                    var unit = '&units=metric';
                    var getMusicUrl = 'https://api.deezer.com/search/playlist?q=';
                    var playlistSrc = 'https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=false&color=007FEB&layout=&size=medium&type=playlist&app_id=1&id=';


                    this.model = {
                        city: '',
                        weather: '',
                        iconUrl: '',
                        temp: '',
                        icon: '',
                        id: ''
                    };

                    this.setBg = () => {
                        if (this.model.icon == "01d") {
                            document.body.style.backgroundImage = "url('../imgs/sun.gif')";
                        } else if (this.model.icon == "02d" || this.model.icon == "03d" || this.model.icon == "03n" || this.model.icon == "04d" || this.model.icon == "04n") {
                            document.body.style.backgroundImage = "url('../imgs/clouds.gif')";
                        } else if (this.model.icon == "09d" || this.model.icon == "09n" || this.model.icon == "10d" || this.model.icon == "10n") {
                            document.body.style.backgroundImage = "url('../imgs/rain.gif')";
                        } else if (this.model.icon == "11d" || this.model.icon == "11n") {
                            document.body.style.backgroundImage = "url('../imgs/thunder.gif')";
                        } else if (this.model.icon == "13d" || this.model.icon == "13n") {
                            document.body.style.backgroundImage = "url('../imgs/snow.gif')";
                        } else if (this.model.icon == "01n" || this.model.icon == "02n") {
                            document.body.style.backgroundImage = "url('../imgs/night.gif')";
                        }

                        this.fetchWeather = () => {
                            $http({
                                method: 'GET',
                                url: getWeatherUrl + this.model.city + lang + unit + API_KEY
                            }).then((response) => {
                                console.log(response);
                                this.model.weather = response.data.weather[0].main;
                                this.model.icon = response.data.weather[0].icon
                                this.model.iconUrl = 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png';
                                this.model.temp = response.data.main.temp;
                                this.setBg();
                            });
                        }

                        this.divReload = () => {
                            var container = document.getElementById("iframe");
                            var content = container.innerHTML;
                            container.innerHTML = content;
                        }

                        this.playMusic = () => {
                            $http({
                                method: 'GET',
                                url: 'https://api.deezer.com/search/playlist?q=' + this.model.weather
                            }).then((response) => {
                                this.model.id = response.data.data[3].id;
                                var newUrl = playlistSrc + this.model.id;
                                document.getElementById("iframe").src = newUrl;
                                console.log(newUrl);
                            })
                            this.divReload();
                        }


                    }
                ]
            })