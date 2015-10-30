'use strict';

angular.module('bookshelfApp')
  .controller('LibraryCtrl', ['$location', 'shelfService', 'partitionService',
    function ($location, shelfService, partitionService) {

      var vm = this;

      vm.library = [];
      vm.booksInShelf = 4;

      (function getCollection() {
        shelfService.getCollection()
          .success(function (collection) {
            vm.library = partitionService.chunk(collection, vm.booksInShelf);
          })
          .error(function (data) {
            // TODO Handle error
            vm.library = [];
          });
      })();

      vm.viewBook = function (isbn) {
        $location.path('/view-book/' + isbn);
      }
    }]);
