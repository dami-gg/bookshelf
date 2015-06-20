angular.module('bookshelfApp')
  .directive('bookForm', function() {
    return {
      restrict: 'E',
      templateUrl: '/app/shared/bookForm/form.html'
    }
  });
