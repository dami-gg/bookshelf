angular.module('bookshelfApp')
  .directive('bookForm', function() {
    return {
      restrict: 'E',
      templateUrl: '/app/shared/books/bookform.html'
    }
  });
