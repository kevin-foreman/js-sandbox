function getLongestOfThreeWords(word1, word2, word3) {
  // your code here

  var longestWord = '';

  for (var i = 0; i < arguments.length; i++) {

    if (longestWord.length < arguments[i].length) {

      longestWord = arguments[i]

    };

  }

  return longestWord;

};

var output = getLongestOfThreeWords('these', 'threes', 'words');
console.log(output); // --> 'threes'