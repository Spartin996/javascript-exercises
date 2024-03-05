const fibonacci = function(numSeq) {
    //Goal is to return the Nth number in the fibonacci sequence

    //Have a set of if's for error catching
    if (numSeq < 0) {
        return "OOPS";
    }

    //define some variables out of scope for the loop
    let prevNum = 1;
    let currentNum = 0;
    let nextNum = 0;
    
    
    // Lets make a fibonacci number
    for (let index = 0; index < numSeq; index++) {
        nextNum = prevNum + currentNum;
        
        //redifine the nums for the next loop
        prevNum = currentNum;
        currentNum = nextNum;
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
