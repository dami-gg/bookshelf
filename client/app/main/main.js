'use strict';

angular.module('bookshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      });
  });
