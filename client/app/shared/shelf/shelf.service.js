'use strict';

angular.module('bookshelfApp')
  .service('shelfService', ['$http', function($http){

    this.addBook = function(book) {
      $http.post('/api/books', {
        isbn: book.isbn,
        title: book.title,
        author: book.author,
        coverImageUrl: book.coverImageUrl,
        category: book.category,
        read: true
      });
    };

    this.getLibrary = function() {
      return $http.get('/api/books');
    };
  }]);
