(function () {

  'use strict';

  angular.module('bookshelfApp')
    .service('shelfService', shelfService);

  /**
   * @ngInject
   */
  function shelfService($http) {

    var service = {
      addBook: addBook,
      deleteBook: deleteBook,
      getBook: getBook,
      getCollection: getCollection,
      modifyBook: modifyBook
    };

    return service;

    //////////////////////

    function addBook(book) {
      $http.post('/api/books', {
        isbn: book.isbn,
        title: book.title,
        author: book.author,
        coverImageUrl: book.coverImageUrl,
        category: book.category,
        read: true
      }, function() {

      }, function(error) {
        // TODO Handle error
        console.log(error);
      });
    }

    function deleteBook(isbn) {
      $http.delete('/api/books/' + isbn,
        function() {

      }, function(error) {
        // TODO Handle error
        console.log(error);
      });
    }

    function modifyBook(book) {
      $http.put('/api/books/' + book.isbn, {
        isbn: book.isbn,
        title: book.title,
        author: book.author,
        coverImageUrl: book.coverImageUrl,
        category: book.category,
        read: true
      }, function() {

      }, function(error) {
        // TODO Handle error
        console.log(error);
      });
    }

    function getCollection() {
      return $http.get('/api/books');
    }

    function getBook(isbn) {
      return $http.get('/api/books/' + isbn);
    }
  }
})();
