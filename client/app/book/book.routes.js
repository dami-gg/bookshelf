'use strict';

angular.module('bookshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add-book', {
        url: '/add-book',
        templateUrl: 'app/book/add-book.html',
        controller: 'AddBookController',
        controllerAs: 'addBook'
      })
      .state('edit-book', {
        url: '/edit-book/:isbn',
        templateUrl: 'app/book/edit-book.html',
        controller: 'EditBookController',
        controllerAs: 'editBook'
      })
      .state('book-detail', {
        url: '/book-detail/:isbn',
        templateUrl: 'app/book/book-detail.html',
        controller: 'BookDetailController',
        controllerAs: 'bookDetail'
      });
  });
