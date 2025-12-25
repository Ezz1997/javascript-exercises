const leapYears = function(years) {

    let isDiviseableByFour = (years % 4 === 0);
    let isDiviseableByHundred = (years % 100 === 0);
    let isDiviseableByFourHundred = (years % 400 === 0);

    if((!isDiviseableByHundred && isDiviseableByFour) || 
       (isDiviseableByHundred && isDiviseableByFourHundred)){
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
