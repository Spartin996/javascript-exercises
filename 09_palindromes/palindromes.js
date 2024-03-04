const palindromes = function (str) {
    //get rid of cases
    let lowerStr = str.toLowerCase();
    //remove all punction using regex
    lowerStr = lowerStr.replace(/[^\w\s\']/g, "");
    //remove whitespace
    lowerStr = lowerStr.replace(/\s/g, "");


    //reverse it to test
    let reStr = "";
    
    reStr = lowerStr.split("");
    reStr = reStr.reverse();
    reStr = reStr.join("");


    //check it
    if (reStr === lowerStr) {
        return true;
    }

    return false;



};

// Do not edit below this line
module.exports = palindromes;
