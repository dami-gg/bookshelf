(function () {

  'use strict';

  angular.module('bookshelfApp')
    .controller('EditBookController', EditBookController);

  /**
   * @ngInject
   */
  function EditBookController($stateParams, $location, shelfService) {
    var vm = this;

    vm.cancel = cancel;
    vm.save = save;

    shelfService.getBook($stateParams.isbn)
      .then(function (response) {
        vm.book = response.data;
        vm.originalBook = angular.copy(vm.book);
      }, function (error) {
        // TODO Handle error
        console.log(error);
      });

    function save() {
      if (angular.equals(vm.book, vm.originalBook) === false) {
        shelfService.modifyBook(vm.book);
        $location.path('/home');
      }
      else {
        // TODO Show message
      }
    }

    function cancel() {
      $location.path('/library');
    }
  }
})();
