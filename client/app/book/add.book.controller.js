'use strict';

angular.module('bookshelfApp')
  .controller('AddBookCtrl', ['$scope', 'booksService', function($scope, booksService){
    $scope.book = {};

    $scope.save = function() {
      booksService.saveBook($scope.book);
    };
  }]);
