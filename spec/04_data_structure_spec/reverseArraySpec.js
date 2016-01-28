describe("Reversing an array", function() {
  var reversing = require('../../src/04_data_structure/reverseArray.js');

  it("reverseArray function takes an array and returns new array with same elements in inverse order", function() {
    expect(reversing.reverseArray(["A","B","C"])).toEqual(["C","B","A"]);
    expect(reversing.reverseArray([])).toEqual([]);
  });

  it("reverseArrayInPlace does what the reverse method does", function() {
    var arrayValue = [1,2,3,4,5];
    expect(reversing.reverseArrayInPlace(arrayValue)).toEqual([5,4,3,2,1]);
  });
});
