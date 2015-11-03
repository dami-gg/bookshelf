'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('should have a jumbotron with the correct data', function() {
    expect(page.h1El.getText()).toBe('Welcome to your bookshelf');
  });
});
