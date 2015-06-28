'use strict';

describe('booksService tests', function(){

  beforeEach(module('bookshelfApp'));

  var booksService, shelfService, googleBooksService, q;

  beforeEach(inject(function(_booksService_, _shelfService_, _googleBooksService_, $q) {
    booksService = _booksService_;
    shelfService = _shelfService_;
    googleBooksService = _googleBooksService_;
    q = $q;

    spyOn(googleBooksService, "getCoverUrl").andCallFake(function() {
      var deferred = q.defer();
      deferred.reject("whatever");
      return deferred.promise;
    });

    spyOn(shelfService, "addBook");
  }));

  it('should have shelfService defined', function() {
    expect(shelfService).toBeDefined();
  });

  it('should have googleBooksService defined', function() {
    expect(googleBooksService).toBeDefined();
  });

  it('should save a book', function() {
    var book = {
      title: "title",
      isbn: "1234"
    };

    booksService.saveBook(book);

    expect(googleBooksService.getCoverUrl).toHaveBeenCalled();
    //expect(shelfService.addBook).toHaveBeenCalled();
  });
});
