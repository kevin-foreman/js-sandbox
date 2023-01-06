function transformFirstAndLast(array) {
    // your code here
    var transformed = {};
    transformed[array[0]] = array[array.length -1];
    return transformed
  };
  
  var output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Foreman']);
  console.log(output); // ==> { Kevin : 'Foreman' }