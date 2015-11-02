'use strict';

angular.module('bookshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add-book', {
        url: '/add-book',
        templateUrl: 'app/book/add-book.html',
        controller: 'EditBookController',
        controllerAs: 'editBook'
      })
      .state('modify-book', {
        url: '/modify-book',
        templateUrl: 'app/book/modify-book.html',
        controller: 'EditBookController',
        controllerAs: 'editBook'
      })
      .state('view-book', {
        url: '/view-book/:isbn',
        templateUrl: 'app/book/book-detail.html',
        controller: 'ViewBookController',
        controllerAs: 'viewBook'
      });
  });
