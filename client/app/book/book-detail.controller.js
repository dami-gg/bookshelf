(function () {
  'use strict';

  angular.module('bookshelfApp')
    .controller('BookDetailController', BookDetailController);

  /**
   * @ngInject
   */
  function BookDetailController($stateParams, $location, shelfService) {
    var vm = this;

    vm.deleteBook = deleteBook;
    vm.editBook = editBook;

    shelfService.getBook($stateParams.isbn)
      .then(function (response) {
        vm.book = response.data;
      }, function (error) {
        // TODO Handle error
        console.log(error);
      });

    function deleteBook(isbn) {
      shelfService.deleteBook(isbn);
      $location.path('/library');
    }

    function editBook(isbn) {
      $location.path('/edit-book/' + isbn);
    }
  }
})();
