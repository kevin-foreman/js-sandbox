function isOddWithoutModulo(num) {
    if((num & 1) == 0){
      return false
    } else {
      return true
    }
  };
  
  var output = isOddWithoutModulo(17);
  console.log(output); // --> true