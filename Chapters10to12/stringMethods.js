var myString = 'This is a Long string.';
var myArray = [];

function returnTests() {
    myArray = [myString.charAt(3), myString.charAt(8), myString.charCodeAt(8), myString.concat('Long enough.'), 
    myString.indexOf('ng'), myString.slice(0, 7), myString.split(' '), myString.toUpperCase(), myString.valueOf()];
    console.log(myArray);
    return myArray;
}

returnTests();

module.exports = returnTests;
