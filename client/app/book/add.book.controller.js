'use strict';

angular.module('bookshelfApp')
  .controller('AddBookCtrl', ['$scope', 'shelfService', function($scope, shelfService){
    $scope.book = {};

    $scope.save = function() {
      shelfService.addBook($scope.book);
    };
  }]);
