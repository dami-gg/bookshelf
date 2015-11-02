(function () {

  'use strict';

  angular.module('bookshelfApp')
    .service('partitionService', partitionService);

  /**
   * @ngInject
   */
  function partitionService() {

    /*
     Divides the array of data in several arrays of chunkSize elements
     */
    this.chunk = function (data, chunkSize) {
      var totalItems = data.length,
        result = [];

      for (var i = 0; i < totalItems; i += chunkSize) {
        result.push(data.slice(i, i + chunkSize));
      }

      return result;
    }
  };
})();
