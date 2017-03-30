'use strict';

/**
 * The Hackathon WeatherMood App
 */
angular.module('weatherMoodApp', [
    "weatherMood.components",
    // "weatherMood.services"
])

// .config(function ($routeProvider, $locationProvider) {
//     $routeProvider
//         .when('/Book/:bookId', {
//             templateUrl: 'user.html',
//             controller: 'userCtrl',
//         })
//         .when('/Book/:bookId/ch/:chapterId', {
//             templateUrl: 'chapter.html',
//             controller: 'ChapterController'
//         });
//     
//     $locationProvider.html5Mode(true);
// });