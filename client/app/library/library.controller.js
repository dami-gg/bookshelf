(function () {

  'use strict';

  angular.module('bookshelfApp')
    .controller('LibraryController', LibraryController);

  /**
   * @ngInject
   */
  function LibraryController($location, shelfService, partitionService) {
    var vm = this;

    vm.booksInShelf = 4;
    vm.library = [];
    vm.viewBook = viewBook;

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

    function viewBook (isbn) {
      $location.path('/view-book/' + isbn);
    }
  };
})();
