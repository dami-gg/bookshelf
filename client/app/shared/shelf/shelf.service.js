'use strict';

angular.module('bookshelfApp')
  .service('shelfService', ['$http', function($http){

    this.addBook = function(book) {
      $http.post('/api/books', {
        name: book.name,
        author: book.author,
        category: book.category,
        read: true
      });
    };

    this.getLibrary = function() {
      return $http.get('/api/books');
    };
  }]);
