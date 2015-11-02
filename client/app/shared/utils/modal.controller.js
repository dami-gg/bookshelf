angular.module('bookshelfApp')
  .controller('ModalCtrl', ['$uibModalInstance', 'items', function ($uibModalInstance, items) {
    var vm = this;

    vm.items = items;
    vm.selected = {
      item: vm.items[0]
    };

    vm.ok = function () {
      $uibModalInstance.close(vm.selected.item);
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
