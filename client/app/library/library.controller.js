'use strict';

angular.module('bookshelfApp')
  .controller('LibraryCtrl', ['$scope', '$location', 'shelfService', 'partitionService',
      function($scope, $location, shelfService, partitionService){

    $scope.library = [];
    $scope.booksInShelf = 4;

    (function getCollection() {
      shelfService.getCollection()
        .success(function(collection){
          $scope.library = partitionService.chunk(collection, $scope.booksInShelf);
        })
        .error(function(data){
          // TODO Handle error
          $scope.library = [];
        });
    })();

    $scope.viewBook = function(isbn) {
      $location.path('/view-book/' + isbn);
    }
  }]);
