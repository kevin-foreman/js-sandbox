// Logger function to apply a function to a string
// Can be used to apply a function to any other element...
// Object, Array, etc...

function logger(func, str) {
    //Your psuedocode here
    // Create an empty string to store the string we plan to modify with the given function
    // Iterate over the string to determine what it consists of
    // Create a variable consisting of the parts of the string
    // Apply the function to each letter in the string and concatenate the results
    // return the resulting string

    //Your code here
    var myString = "";
    for (var i = 0; i < str.length; i++) {
        myString += (func(str[i]));
    }
    return myString;
};

function test (char) {
    char += "Z";
    return char;
    // console.log(char);
};

var output = logger(test, 'Hello');
console.log(output);