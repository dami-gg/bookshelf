(function () {

    'use strict';

    angular.module('bookshelfApp')
      .controller('MainController', MainController);

    /**
     * @ngInject
     */
    function MainController($scope) {
      $scope.message = 'Hello';
    }
  })
();
