(function () {

  'use strict';

  angular.module('bookshelfApp')
    .factory('Book', bookFactory);

  /**
   * @ngInject
   */
  function bookFactory() {

    function Book(isbn, title, author, coverImageUrl, category) {
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.coverImageUrl = coverImageUrl;
      this.category = category;
    };

    return Book;
  }
})();
