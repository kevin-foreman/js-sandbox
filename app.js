function assertArraysEqual(actual, expected, testName) {

    var lengthsEqual = (actual.length === expected.length)
    var contentsEqual = true
    for (var i = 0; i < actual.length; i++) {

        if (actual[i] !== expected[i]) {
            
            contentsEqual = false
        
        };

    }

    if (contentsEqual && lengthsEqual) {

        console.log("passed")

    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    };
};

// Success case
var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

function generateFirstNFibonaccis(n) {
    var arr = [0, 1];
    for (var i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
};

var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7);
assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "0, 1, 1 ,2 ,3 ,5 ,8"