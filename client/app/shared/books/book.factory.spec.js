describe('Book factory', function () {

  var Book;
  beforeEach(module('bookshelfApp'));
  beforeEach(inject(function (_Book_) {
    Book = _Book_;
  }));

  describe('Constructor', function () {

    var book = new Book('1', 'Title', 'Author', 'ImageURL', 'Category');

    it('assigns an ISBN', function () {
      expect(book.isbn).toBe('1');
    });

    it('assigns a title', function () {
      expect(book.title).toBe('Title');
    });

    it('assigns an author', function () {
      expect(book.author).toBe('Author');
    });

    it('assigns an image url', function () {
      expect(book.coverImageUrl).toBe('ImageURL');
    });

    it('assigns a category', function () {
      expect(book.category).toBe('Category');
    });
  });
});
