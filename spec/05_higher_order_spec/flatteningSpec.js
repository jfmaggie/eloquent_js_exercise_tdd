describe("Flattening", function(){
  var Flattening = require('../../src/05_higher_order/flattening');

  it("flatten an array into a single one", function() {
    array = [[1,2,3], [4,5], [6]];
    expect(Flattening.flat(array)).toEqual([1,2,3,4,5,6]);
  });
});
