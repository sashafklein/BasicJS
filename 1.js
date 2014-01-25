// Find the sum of all the multiples of 3 or 5 below 1000.
var t = require('./tools');

factorArray = [3,5];
limit = 1000;

total = 0;

each( exclusiveRange(0,1000), addToSumIfValid );
console.log(total);

function addToSumIfValid (number) {
  if ( isMultiple(number) ) {
    total += number;
  };
}

function isMultiple(num) {
  console.log("Validating " + num)

  for (i=0; i<factorArray.length; i++) {
    if (num % factorArray[i] == 0) { return true; } else { return false; };
  }
}

function exclusiveRange (a,b) {
  array = [];
  for (i=a; i<b; i++) { array.push(i); }
  console.log("Array:", array);
  return array;
}

function each (array, func) {
  for(i=0; i<array.length; i++) {
    func(array[i]);
  };
}