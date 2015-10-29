'use strict';

angular.module('bookshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add-book', {
        url: '/add-book',
        templateUrl: 'app/book/add.html',
        controller: 'EditBookCtrl',
        controllerAs: 'editBook'
      })
      .state('modify-book', {
        url: '/modify-book',
        templateUrl: 'app/book/modify.html',
        controller: 'EditBookCtrl',
        controllerAs: 'editBook'
      })
      .state('view-book', {
        url: '/view-book/:isbn',
        templateUrl: 'app/book/view.html',
        controller: 'ViewBookCtrl'
      });
  });
