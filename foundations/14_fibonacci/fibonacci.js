const fibonacci = function(num) {

    if(num < 0){
        return "OOPS";
    }

    let cur = 0;
    let next = 1;

    for(let i = 0; i < num; i++){
        const sum = cur + next;
        cur = next;
        next = sum;
    }

    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
