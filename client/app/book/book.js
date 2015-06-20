'use strict';

angular.module('bookshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add-book', {
        url: '/add-book',
        templateUrl: 'app/book/add.html',
        controller: 'AddBookCtrl'
      })
      .state('modify-book', {
        url: '/modify-book',
        templateUrl: 'app/book/modify.html',
        controller: 'ModifyBookCtrl'
      });
  });
