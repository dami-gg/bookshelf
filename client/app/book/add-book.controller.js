(function () {

  'use strict';

  angular.module('bookshelfApp')
    .controller('AddBookController', AddBookController);

  //AddBookController.$inject['booksService', '$uibModal'];

  /**
   * @ngInject
   */
  function AddBookController($location, $uibModal, booksService) {
    var vm = this;

    vm.save = save;

    vm.showFindBookPopup = showFindBookPopup;

    function save () {
      booksService.saveBook(vm.book);
      $location.path('/home');
    }

    function showFindBookPopup () {
      if (vm.searchedTitle === undefined || vm.searchedAuthor === undefined) {
        // TODO Show error popup
        return;
      }

      var searchableTitle = vm.searchedTitle.toLowerCase().replace(/ /g, '+'),
        searchableAuthor = vm.searchedAuthor.toLowerCase().replace(/ /g, '+');

      vm.searchResults = [];

      booksService.findBook(searchableTitle, searchableAuthor)
        .then(function (data) {
          vm.searchResults = data;
          loadPopup();
        }, function (error) {
          // TODO Show popup with error message
          console.log(error);
        });
    }

    function loadPopup () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/book/find-book.modal.html',
        controller: 'ModalController',
        controllerAs: 'modalCtrl',
        size: vm.searchResults.length,
        resolve: {
          items: function () {
            return vm.searchResults;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        vm.book = selectedItem;
      }, function (error) {
        // TODO Handle error
        console.log(error);
      });
    }
  }
})();
