describe("A list", function() {
  var listObj = require('../../src/04_data_structure/list');
  var stringify = require('json-stable-stringify');

  beforeEach(function() {
    listObj.arr = [];
  });

  it("A function 'arrayToList' takes an array and return a list ", function() {
    var list = {
      value: 10,
      rest: {
        value: 20,
        rest: null
      }
    };
    expect(stringify(listObj.arrayToList([10, 20]))).toBe(stringify(list));
  });

  it("A function 'listToArray' produces an array from list", function() {
    var list = listObj.arrayToList([10, 20]);
    expect(listObj.listToArray(list)).toEqual([10, 20]);
  });

  it("Helper function 'prepend' takes an element and a list and returns\
  new list with element prepended", function() {
    expect(stringify(listObj.prepend(10, null))).toBe(stringify({value: 10, rest: null}));
    expect(stringify(listObj.prepend(10, listObj.prepend(20, null)))).toBe(stringify({
      value: 10,
      rest: {
        value: 20,
        rest: null
      }
    }));
  });

  it("Function 'nth' returns the element at the given position in the list", function() {
    var list = listObj.arrayToList([10, 20, 30]);
    expect(listObj.nth(list, 1)).toEqual(20);
  });

  it("Function 'nth' returns undefined when there is no such element", function() {
    var list = listObj.arrayToList([10, 20, 30]);
    expect(listObj.nth(list, 3)).toEqual(undefined);
  });

});
