var reverseArray = {
  reverseArray: function(arr) {
    newArr = [];
    // use push
    // for (var i = (arr.length - 1); i >= 0; i--) {
    //   newArr.push(arr[i]);
    // }

    // use unshift
    for (var i = 0; i < arr.length; i++) {
      newArr.unshift(arr[i]);
    }
    return newArr;
  },
  reverseArrayInPlace: function(arr) {
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
      tmp = arr[i];
      arr[i] = arr[(arr.length - 1) - i];
      arr[(arr.length - 1) - i] = tmp;
    }
    return arr;
  }
};

module.exports = reverseArray;
