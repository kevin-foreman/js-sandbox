function getAllKeys(obj) {
    // your code here
    var keysArr = [];
    for (var key in obj) {
        keysArr.push(key)
    }
    return keysArr;
};

var output = getAllKeys({
    a: 'a',
    number: 11,
    hungry: true,
    grammyWins: 1
});
console.log(output); // ==> ['a', 'number', 'hungry', 'grammyWins']