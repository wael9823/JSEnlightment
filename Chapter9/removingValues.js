var myArray = [23, 32, 75, 85, 34, 16, 73, 25];

var originalArrayLength = myArray.length;

function showOriginalLength(){
    return originalArrayLength;
}

myArray.length = 2;

module.exports.showOriginalLength = showOriginalLength;
module.exports.myArray = myArray;
