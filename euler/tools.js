function range(a, b) {
  var array = [];
  var i;
  for (i = a; i <= b; i++) { array.push(i); }
  return array;
}

module.exports = { range: range};