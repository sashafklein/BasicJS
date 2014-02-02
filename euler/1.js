// Find the sum of all the multiples of 3 or 5 below 1000.
var t = require('./tools');

var factorArray = [3, 5];
var limit = 1000;
var range = t.range(1, limit - 1);
var allMultiples, answer;

allMultiples = range.filter(function (number) {
  return factorArray.some(function (factor) {
    return number % factor === 0;
  });
});

answer = allMultiples.reduce(function (num, sum) {
  return num + sum;
}, 0);

console.log(answer);