function countWords(inputWords) {
  return inputWords.reduce(function (map, word) {
    map[word] = ++map[word] || 1;
    return map;
  }, {});
}

module.exports = countWords;