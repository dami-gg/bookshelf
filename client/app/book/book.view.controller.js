'use strict';

angular.module('bookshelfApp')
  .controller('ViewBookCtrl', ['$scope', '$stateParams', 'shelfService',
    function($scope, $stateParams, shelfService){

      $scope.book = {};

      shelfService.getBook($stateParams.isbn)
        .then(function(response){
          $scope.book = response.data;
        }, function(error) {
          // TODO Handle error
        })
  }]);
