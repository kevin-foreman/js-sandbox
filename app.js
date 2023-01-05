function assertObjectsEqual(actual, expected, testName) {
    // your code here
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected)

    if (actual === expected) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    };
};


// Success case
var person = {
    firstName: 'Cassidy',
    lastName: 'Jacobs'
};
// updateObject(person, 'firstName', 'Jack');

var expected = {
    firstName: 'Jack',
    lastName: 'Jacobs'
};

assertObjectsEqual(person, expected, "updates person's existing first name field");
// console output:
// passed

// Failure case
var person = {
    firstName: 'Joe',
    lastName: 'Blow'
};
// updateObject(person, 'age', 35);

var expected = {
    firstName: 'Joe',
    lastName: 'Blow',
    age: 35
};
assertObjectsEqual(person, expected, "adds person's non-existing age field");
  // console output:
  // FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}