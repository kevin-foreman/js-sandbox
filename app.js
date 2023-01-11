function addPropertiesToObject(obj1, obj2) {
    // Your psuedocode here
    // create a function that adds all properties of the first object to the second object
    // First iterate over obj1 to determine all of its properties
    // Use some code to check if the object has its own properties, also eliminates iterating over the object prototypes properties, if any
    // Use the asign method to copy all enumerable properties from obj1 to obj2
    // return the second object

    // Your code here
    for (var property in obj1) {

        if (obj1.hasOwnProperty(property)) {

            Object.assign(obj2, obj1);
        }
    }

    return obj2;

};

var output = addPropertiesToObject({ key: 'string' }, { keys: 'strings' });
console.log(output); // ==> { keys: 'strings', key: 'string'}