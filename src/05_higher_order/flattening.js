var Flatterning = {
  flat: function(array) {
    return array.reduce(function(previous, current) {
      return previous.concat(current);
    },[]);
  }
}

module.exports = Flatterning;
