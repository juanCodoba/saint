'use strict';

angular.module('saintApp', ['saintApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router',  'satellizer',
    'ngMessages',
    'ngMaterial',
    'md.data.table',
    'ngImgCrop',
    'ngFileUpload',
    'LocalStorageModule'
  ])
  .constant("API","http://172.16.0.17:8080/puebaCfipSaint")
  .config(function($urlRouterProvider, $locationProvider,$authProvider,API) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $authProvider.loginUrl = API + '/api/auth/login';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPredix = 'Texla';
  })
  .config(function(localStorageServiceProvider){
    localStorageServiceProvider
    .setPrefix('LSSaint')
    .setStorageType('localStorage');
  })
