function transformEmployeeData(employeeData) {
    // your code here
    var dataArr = [];
    for (var i = 0; i < employeeData.length; i++) {
        var dataObj = {};
        var employeeArr = employeeData[i];
        for (var j = 0; j < employeeData[i].length; j++) {
            dataObj[employeeArr[j][0]] = employeeArr[j][1]
        }
        dataArr.push(dataObj)
    }
    return dataArr;
};

var output = transformEmployeeData([
    [
        ['firstName', 'Kevin'], ['lastName', 'Foreman'], ['age', 42], ['role', 'Developer']
    ],
    [
        ['firstName', 'Tracy'], ['lastName', 'Foreman'], ['age', 38], ['role', 'Human Resources']
    ]
]);
console.log(output); // ==> [ {firstName: 'Kevin', lastName: 'Foreman', age: 42, role: 'Developer'}, {firstName: 'Tracy', lastName: 'Foreman', age: 38, role: 'Human Resources'} ]