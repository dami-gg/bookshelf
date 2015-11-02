(function () {

  'use strict';

  angular.module('bookshelfApp')
    .directive('bookForm', bookFormDirective);

  function bookFormDirective() {
    return {
      restrict: 'E',
      templateUrl: '/app/shared/books/book-form.html'
    }
  };
})();


