'use strict';

describe('partitionService tests', function(){

  beforeEach(module('bookshelfApp'));

  var partitionService;

  beforeEach(inject(function(_partitionService_){
    partitionService = _partitionService_;
  }));

  it('Splits data in chunks where all except perhaps the last one have the specified size', function(){
    var data = [1, 2, 3, 4, 5, 6, 7, 8],
      chunkSize = 3,
      result = partitionService.chunk(data, chunkSize);

    result.forEach(function(item, i) {
      if (i !== result.length - 1) {
        expect(item.length).toBe(chunkSize);
      }
    });
  });

  it('Produces an empty result if data is empty', function(){
    var data = [],
      chunkSize = 3,
      result = partitionService.chunk(data, chunkSize);

    expect(result.length).toBe(0);
  });

});
