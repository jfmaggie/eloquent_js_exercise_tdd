var sumOfRange = {
  range: function(start, end, step) {
    rangeArray = [];
    if (step == null) { step = 1; }
    if (step < 0) {
      step = - step;
      tmp = start;
      start = end;
      end = tmp;
      var stepIsNegative = true;
    }
    for (var i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
    if (stepIsNegative) { rangeArray.reverse(); }
    return rangeArray;
  },
  sum: function(arrayNum) {
    return arrayNum.reduce(function(pre, cur) {
      return pre + cur;
    },0);
  }
};

module.exports = sumOfRange;
