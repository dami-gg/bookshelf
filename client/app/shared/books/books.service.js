'use strict';

angular.module('bookshelfApp')
  .service('booksService', ['shelfService', 'googleBooksService',
    function(shelfService, googleBooksService){

      this.saveBook = function(book) {
        googleBooksService.getCoverUrl(book.isbn)
          .then(function(data) {
              var info = data.data;
              if (info !== undefined && info.totalItems > 0) {
                book.coverImageUrl = info.items[0].volumeInfo.imageLinks.thumbnail;
              }
            }, function(error) {
                // TODO Handle error
                book.coverImageUrl = "";
            }
          ).finally(function(){
            return shelfService.addBook(book);
          })
          .then(function(data) {

            }, function(error) {
                  // TODO Handle error
            }
          );
        };
  }]);
