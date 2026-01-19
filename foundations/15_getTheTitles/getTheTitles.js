const getTheTitles = function(books) {
    if(books.length < 1){
        return -1;
    }
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
