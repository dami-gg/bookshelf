'use strict';

angular.module('bookshelfApp')
  .service('googleBooksService', ['$http', function($http){

    this.getCoverUrl = function(isbn) {
      return $http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn);
    }
  }]);
