(function () {
  'use strict';

  angular.module('bookshelfApp')
    .controller('ViewBookController', ViewBookController);

  /**
   * @ngInject
   */
  function ViewBookController($stateParams, shelfService) {
    var vm = this;

    shelfService.getBook($stateParams.isbn)
      .then(function (response) {
        vm.book = response.data;
      }, function (error) {
        // TODO Handle error
      })
  };
})();
