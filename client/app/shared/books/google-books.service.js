(function () {

  'use strict';

  angular.module('bookshelfApp')
    .service('googleBooksService', googleBooksService);

  /**
   * @ngInject
   */
  function googleBooksService($http) {

    var service = {
      findBook: findBook,
      getCoverUrl: getCoverUrl
    };

    return service;

    //////////////////////

    function getCoverUrl(isbn) {
      return $http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn);
    };

    function findBook(title, author) {
      return $http.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + title + '&inauthor:' + author);
    };
  };
})();
