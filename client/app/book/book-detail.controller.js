(function () {
  'use strict';

  angular.module('bookshelfApp')
    .controller('BookDetailController', BookDetailController);

  /**
   * @ngInject
   */
  function BookDetailController($stateParams, $location, shelfService) {
    var vm = this;

    vm.editBook = editBook;

    shelfService.getBook($stateParams.isbn)
      .then(function (response) {
        vm.book = response.data;
      }, function (error) {
        // TODO Handle error
        console.log(error);
      });

    function editBook(isbn) {
      $location.path('/edit-book/' + isbn);
    }
  }
})();
