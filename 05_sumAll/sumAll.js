const sumAll = function(num1, num2) {
  let sum = 0;
  let smallNum = 0;
  let bigNum = 0;
  //validation to check numbers are the only params
  if(typeof(num1) != "number" || typeof(num2) != "number") {
    return "ERROR";
  }
  if(num1 < 0 || num2 < 0) {
    return "ERROR";
  }



  if(num1 > num2) {
    smallNum = num2;
    bigNum = num1;
  } else {
    smallNum = num1;
    bigNum = num2;
  }

  while (smallNum <= bigNum) {
    sum = sum + smallNum;
    smallNum++
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
