'use strict';

angular.module('bookshelfApp')
  .controller('LibraryCtrl', ['$scope', 'shelfService', function($scope, shelfService){

    $scope.library = {};

    (function getLibrary() {
      shelfService.getLibrary()
        .success(function(data){
          $scope.library = data;
        })
        .error(function(data){
          // TODO Handle error
          $scope.library = {};
        });
    })();
  }]);
