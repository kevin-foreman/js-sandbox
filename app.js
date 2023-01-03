// function assertArraysEqual(actual, expected, testName) {
    // your code here

// };

// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
// assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = generateFirstNFibonaccis(7);
// assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

var scalar1 = 'equal';
var scalar2 = 'equal';
console.log("two scalars can be compared with each other using triple equals:,");
console.log(scalar1 === scalar2);

var array1 = ['a', 'b', 'c'];
var array2 = ['a', 'b', 'c'];
console.log("two arrays can be compared with each other using triple equals");
console.log(array1 === array2);