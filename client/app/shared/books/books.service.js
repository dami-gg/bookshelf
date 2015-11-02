'use strict';

angular.module('bookshelfApp')
  .service('booksService', ['shelfService', 'googleBooksService', '$q',
    function (shelfService, googleBooksService, $q) {

      var Book = function (isbn, title, author, coverImageUrl, category) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.coverImageUrl = coverImageUrl;
        this.category = category;
      };

      this.saveBook = function (book) {
        googleBooksService.getCoverUrl(book.isbn)
          .then(function (response) {
            var info = response.data;
            if (info !== undefined && info.totalItems > 0) {
              book.coverImageUrl = info.items[0].volumeInfo.imageLinks.thumbnail;
            }
          }, function (error) {
            // TODO Handle error
            book.coverImageUrl = "";
          }
        ).finally(function () {
            return shelfService.addBook(book);
          })
          .then(function (response) {

          }, function (error) {
            // TODO Handle error
            console.log(error);
          }
        );
      };

      this.findBook = function (title, author) {
        var deferred = $q.defer(),
          promise = deferred.promise;

        googleBooksService.findBook(title, author)
          .then(function (response) {
            var info = response.data,
              results = [],
              result,
              isbn = "";
            if (info !== undefined && info.totalItems > 0) {
              info.items.forEach(function (item) {
                item.volumeInfo.industryIdentifiers.forEach(function (item) {
                  if (item.type === "ISBN_10") {
                    isbn = item.identifier;
                  }
                });
                result = new Book(
                  isbn,
                  item.volumeInfo.title,
                  item.volumeInfo.authors !== undefined ? item.volumeInfo.authors[0] : "",
                  item.volumeInfo.imageLinks.smallThumbnail,
                  item.volumeInfo.categories !== undefined ? item.volumeInfo.categories[0] : "");
                results.push(result);
              });
              deferred.resolve(results);
            }
            else {
              deferred.reject("No books have been found");
            }
          }, function (error) {
            deferred.reject(error);
          });

        return promise;
      };

    }]);
