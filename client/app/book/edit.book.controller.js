'use strict';

angular.module('bookshelfApp')
  .controller('EditBookCtrl', ['booksService', function(booksService){
    var vm = this;

    vm.book = {};

    vm.save = function() {
      booksService.saveBook(vm.book);
    };
  }]);
