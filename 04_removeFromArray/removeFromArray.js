const removeFromArray = function(array, ...needle) {
  let i = 0;

  let result = [];
  while(i < array.length) {
      if (!needle.includes(array[i])){
        result.push(array[i]);
      } 
    i++
  }

  return result;

};

// Do not edit below this line
module.exports = removeFromArray;
