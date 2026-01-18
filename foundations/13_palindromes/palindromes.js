const palindromes = function (str) {
    let left = 0;
    let right = str.length - 1;
    const lowerCaseStr = str.toLowerCase();

    while(left < right){
        while(!isAlphaNumeric(lowerCaseStr[left])){
            left++;
        }

        while(!isAlphaNumeric(lowerCaseStr[right])){
            right--;
        }

        if(lowerCaseStr[left] !== lowerCaseStr[right]){
            return false;
        }else{
            left++;
            right--;
        }
    }

    return true;
};

// Source - https://stackoverflow.com/a
// Posted by Michael Martin-Smucker
// Retrieved 2026-01-18, License - CC BY-SA 3.0

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  
  return true;
};


// Do not edit below this line
module.exports = palindromes;
