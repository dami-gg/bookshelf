(function () {

  'use strict';

  angular.module('bookshelfApp')
    .controller('LibraryController', LibraryController);

  /**
   * @ngInject
   */
  function LibraryController($location, shelfService, partitionService, Book) {
    var vm = this;

    vm.booksInShelf = 4;
    vm.content = [];
    vm.shelves = [];
    vm.viewBook = viewBook;

    (function getCollection() {
      shelfService.getCollection()
        .success(function (collection) {
          collection.forEach(function (book) {
            vm.content.push(new Book(book.isbn, book.title, book.author, book.coverImageUrl, book.category));
          });
          vm.shelves = partitionService.chunk(collection, vm.booksInShelf);
        })
        .error(function (error) {
          // TODO Handle error
          console.log(error);
          vm.content = [];
          vm.shelves = [];
        });
    })();

    function viewBook(isbn) {
      $location.path('/book-detail/' + isbn);
    }
  }
})();
