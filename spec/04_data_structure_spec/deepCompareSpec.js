describe("Deep comparison", function() {
  var compare = require('../../src/04_data_structure/deepCompare');
  var obj = {here: {is: "an"}, object: 2};
  var obj2 = {that: {is: {an: 1}, isnot: {an: 2}}, that2: 2};

  it("isObject returns true if the value is an object and not null", function() {
    expect(compare.isObject(obj)).toBe(true);
  });

  it("deepEqual should return true if comparing the same object", function() {
    expect(compare.deepEqual(obj, obj)).toBe(true);
  });

  it("deepEqual should return false if comaring two different objects", function() {
    expect(compare.deepEqual(obj, {here: 1, object: 2})).toBe(false);
  });

  it("deepEqual should return true if two objects have same values", function() {
    expect(compare.deepEqual(obj, {here: {is: "an"}, object: 2})).toBe(true);
  });

  it("deepEqual should still work with arbitry objects", function() {
    expect(compare.deepEqual(obj2, {that: {is: {an: 1}, isnot: {an: 2}}, that2: 2})).toBe(true);
  });

  // Todo: write test that checks short circuit 
});
