const add = function(num1, num2) {
  let answer = num1 + num2;
  return answer;
	
};

const subtract = function(num1, num2) {
  let answer = num1 - num2;
  return answer;
	
};

const sum = function(array) {
	let answer = array.reduce((sum, current) => sum + current, 0);
  return answer;


};

const multiply = function(array) {
  let answer = array.reduce((mult, current) => mult * current, 1);
  return answer;

};

const power = function(num1, num2) {
  let answer = num1 ** num2;
  return answer;
	
};

const factorial = function(num) {
  let answer = 1;
  for (let index = 1; index <= num; index++) {
    answer = answer * index;
  }
	return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
