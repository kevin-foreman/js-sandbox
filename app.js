var customerData = {
    'Joe': {
        visits: 1
    },
    'Carol': {
        visits: 2
    },
    'Howard': {
        visits: 3,
    },
    'Carrie': {
        visits: 4
    }
};

function greetCustomer(firstName) {
    // your code here
    // Case 1 - Unknown customer (Name is not present in customerData, or generic greeting)
    var greeting = "Welcome! Is this your first time?";

    if (customerData[firstName]) {
        // Case 3 - Repeat customer ('visits' value is greater than 1)
        if (customerData[firstName].visits > 1) {
            greeting = "Welcome back, " + firstName + "! So glad to see you again!";
            // Case 2 - Customer who has visited only once
        } else {
            greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!"
        }
    }
    return greeting;
};

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'