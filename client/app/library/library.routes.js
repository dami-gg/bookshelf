'use strict';

angular.module('bookshelfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('library', {
        url: '/library',
        templateUrl: 'app/library/library.html',
        controller: 'LibraryController',
        controllerAs: 'library'
      });
  });
