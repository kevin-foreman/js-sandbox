function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  var shortestWord = word1;

  for (var i = 0; i < arguments.length; i++) {
      if (shortestWord.length > arguments[i].length) {
          shortestWord = arguments[i]
      };
  }
  return shortestWord;
};

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'