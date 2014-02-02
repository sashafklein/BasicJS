var t = require('./tools');
var range = t.range(1, 999);

function valueIfMultiple(num) {
  if (num % 3 === 0 || num % 5 === 0) {
    return num;
  }
  return 0;
}

function recursiveSum(array, initial) {
  if (!array.length) {
    return initial;
  }
  return recursiveSum(array.slice(1), initial + valueIfMultiple(array[0]));
}

console.log(recursiveSum(range, 0));