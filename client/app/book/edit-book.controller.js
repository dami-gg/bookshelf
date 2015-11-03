(function () {

  'use strict';

  angular.module('bookshelfApp')
    .controller('EditBookController', EditBookController);

  //EditBookController.$inject['booksService', '$uibModal'];

  /**
   * @ngInject
   */
  function EditBookController(booksService, $uibModal) {
    var vm = this;

    vm.save = save;

    vm.showFindBookPopup = showFindBookPopup;

    function save () {
      booksService.saveBook(vm.book);
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
      }, function () {
        // TODO Handle error
        //$log.info('Modal dismissed at: ' + new Date());
      });
    }
  }
})();
