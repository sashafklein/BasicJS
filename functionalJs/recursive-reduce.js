function reduce(arr, fn, initial) {
  if (!arr.length) {
    return initial;
  }

  initial[arr[0]] = ++initial[arr[0]] || 1;

  return reduce(arr.slice(1), fn, initial);
}

module.exports = reduce;