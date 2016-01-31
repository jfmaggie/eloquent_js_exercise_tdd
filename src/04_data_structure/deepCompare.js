var Compare = {
  deepEqual: function(value1, value2) {
    if(Compare.isObject(value1) && Compare.isObject(value2)) {
      for (var variable in value2) {
        if (value1.hasOwnProperty(variable)) {
          return Compare.deepEqual(value1[variable], value2[variable]);
        } else {
          // short circuit
          return false;
        }
      }
    }
    return value1 === value2;
  },
  isObject: function(value) {
    return (typeof value == "object") && value != null;
  }
};

module.exports = Compare;
