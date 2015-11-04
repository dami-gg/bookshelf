describe('LibraryController', function() {

  beforeEach(module('bookshelfApp'));

  var controller;

  beforeEach(inject(function($controller, _$location_, _shelfService_, _partitionService_, _Book_) {
    controller = $controller('LibraryController', {
      $location: _$location_,
      shelfService: _shelfService_,
      partitionService: _partitionService_,
      Book: _Book_
    });
  }));

  it('should have shelves of 4 books', function() {
    expect(controller.booksInShelf).toBe(4);
  });

  it('should have viewBook method defined', function() {
    expect(controller.viewBook).toBeDefined();
  });
});
