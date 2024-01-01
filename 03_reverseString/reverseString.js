const reverseString = function(string) {
  let manipulated = string.split("");
  manipulated = manipulated.reverse();
  let result = manipulated.join("");
  return result;
};

// Do not edit below this line
module.exports = reverseString;
