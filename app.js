function listAllValues(obj) {
    // your code here
    var valuesArr = [];
    for (var value in obj) {
        valuesArr.push(obj[value])
    }
    return valuesArr;
};

var output = listAllValues({
    a: 'a',
    number: 11,
    hungry: true,
    grammyWins: 1
});
console.log(output); // ==> ['a', 11, true, 1]