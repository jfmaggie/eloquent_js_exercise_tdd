var List = {
  arrayToList: function(arr) {
    var newList = {};
    for (var i = (arr.length - 1); i >= 0; i--) {
      newList = List.prepend(arr[i], newList);
      if (newList.value == arr[arr.length - 1]) {
        newList.rest = null;
      }
    }
    return newList;
  },
  listToArray: function(list, array) {
    if (array == null || typeof(array) == undefined) {
      array = [];
    }
    array.push(list.value);
    if(list.rest != null) { List.listToArray(list.rest, array); }
    return array;
  },
  prepend: function(element, list) {
    return { value: element, rest: list };
  },
  nth: function(list, n) {
    arr = List.listToArray(list);
    if (n > arr.length || n < 0) {
      return undefined;
    }
    return arr[n];
  }
};

module.exports = List;
