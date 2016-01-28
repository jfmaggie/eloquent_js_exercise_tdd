describe("The sum of a range", function() {
  var sumOfRange = require('../../src/04_data_structure/sumOfRange');

  it("A range function takes 2 args start/end and returns array", function() {
    expect(sumOfRange.range(1, 10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it("A sum function takes array of numbers and return the sum", function() {
    expect(sumOfRange.sum(sumOfRange.range(1, 10))).toEqual(55);
  });

  it("Range function takes optional arguments, positive step", function() {
    expect(sumOfRange.range(1, 10, 2)).toEqual([1,3,5,7,9]);
  });

  it("Range function takes optional arguments, negative step", function() {
    expect(sumOfRange.range(5, 2, -1)).toEqual([5,4,3,2]);
  });
});
