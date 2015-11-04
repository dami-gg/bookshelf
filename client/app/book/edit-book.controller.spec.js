describe('EditBookController', function() {

  beforeEach(module('bookshelfApp'));

  var controller;

  beforeEach(inject(function($controller, _$stateParams_, _$location_, _shelfService_) {
    controller = $controller('EditBookController', {
      $stateParams: _$stateParams_,
      $location: _$location_,
      shelfService: _shelfService_
    });
  }));

  it('should have save method defined', function() {
    expect(controller.save).toBeDefined();
  });

  it('should have cancel method defined', function() {
    expect(controller.cancel).toBeDefined();
  });
});
