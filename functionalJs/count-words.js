function countWords(inputWords) {
  return inputWords.reduce(function (hash, word) {
    if (hash[word]) {
      hash[word] += 1;
    } else {
      hash[word] = 1;
    }
    return hash;
  }, {});
}

module.exports = countWords;