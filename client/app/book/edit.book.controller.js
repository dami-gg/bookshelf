'use strict';

angular.module('bookshelfApp')
  .controller('EditBookCtrl', ['booksService', '$uibModal', function (booksService, $uibModal) {
    var vm = this;

    vm.save = function () {
      booksService.saveBook(vm.book);
    };

    vm.showFindBookPopup = function () {

      if (vm.searchedTitle === undefined || vm.searchedAuthor === undefined) {
        // TODO Show error popup
        return;
      }

      var searchableTitle = vm.searchedTitle.toLowerCase().replace(/ /g, "+"),
        searchableAuthor = vm.searchedAuthor.toLowerCase().replace(/ /g, "+");

      vm.searchResults = [];

      booksService.findBook(searchableTitle, searchableAuthor)
        .then(function (data) {
          vm.searchResults = data;
          loadPopup();
        }, function (error) {
          // TODO Show popup with error message
        });
    };

    var loadPopup = function () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/book/find.book.popup.html',
        controller: 'ModalCtrl',
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
  }]);

