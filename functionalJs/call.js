function duckCount() {

  var argArray = Array.prototype.slice.call(arguments);
  return argArray.filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  }).length;

}

module.exports = duckCount;