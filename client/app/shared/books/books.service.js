(function () {

  'use strict';

  angular.module('bookshelfApp')
    .service('booksService', booksService);

  /**
   * @ngInject
   */
  function booksService(shelfService, googleBooksService, $q, Book) {

    var service = {
      findBook: findBook,
      saveBook: saveBook
    };

    return service;

    //////////////////////

    function saveBook (book) {
      googleBooksService.getCoverUrl(book.isbn)
        .then(function (response) {
          var info = response.data;
          if (info !== undefined && info.totalItems > 0) {
            book.coverImageUrl = info.items[0].volumeInfo.imageLinks.thumbnail;
          }
        }, function (error) {
          // TODO Handle error
          console.log(error);
          book.coverImageUrl = '';
        }
      ).finally(function () {
          return shelfService.addBook(book);
        })
        .then(function () {

        }, function (error) {
          // TODO Handle error
          console.log(error);
        }
      );
    }

    function findBook (title, author) {
      var deferred = $q.defer(),
        promise = deferred.promise;

      googleBooksService.findBook(title, author)
        .then(function (response) {
          var info = response.data,
            results = [],
            result,
            isbn = '';
          if (info !== undefined && info.totalItems > 0) {
            info.items.forEach(function (item) {
              item.volumeInfo.industryIdentifiers.forEach(function (item) {
                if (item.type === 'ISBN_10') {
                  isbn = item.identifier;
                }
              });
              result = new Book(
                isbn,
                item.volumeInfo.title,
                item.volumeInfo.authors !== undefined ? item.volumeInfo.authors[0] : '',
                item.volumeInfo.imageLinks !== undefined ? item.volumeInfo.imageLinks.smallThumbnail : '',
                item.volumeInfo.categories !== undefined ? item.volumeInfo.categories[0] : '');
              results.push(result);
            });
            deferred.resolve(results);
          }
          else {
            deferred.reject('No books have been found');
          }
        }, function (error) {
          deferred.reject(error);
        });

      return promise;
    }
  }
})();
