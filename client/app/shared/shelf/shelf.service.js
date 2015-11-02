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
      getBook: getBook,
      getCollection: getCollection
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
      });
    };

    function getCollection() {
      return $http.get('/api/books');
    };

    function getBook(isbn) {
      return $http.get('/api/books/' + isbn);
    }
  };
})();
