const repeatString = function(string, num) {

    let originalString = string;
    let repeatedString = "";

    if(num < 0){
        return "ERROR";
    }

    for(let i = 0; i < num ; i++){
        repeatedString += originalString;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
