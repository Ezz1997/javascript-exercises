const sumAll = function(bound1, bound2) {

    if(!Number.isInteger(bound1) || !Number.isInteger(bound2)){
        return "ERROR";
    }

    if(bound1 < 0 || bound2 < 0){
        return "ERROR";
    }

    let upperIncluded = Math.max(bound1, bound2);
    let lowerIncluded = Math.min(bound1, bound2);
    let sum = 0;

    for(let i = lowerIncluded; i <= upperIncluded; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
