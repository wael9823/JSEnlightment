var myNum = 4598.2398;

var myArray = [];

function returnTests2() {
    myArray = [myNum.toExponential(), myNum.toFixed(3), myNum.toLocaleString(), myNum.toPrecision(3), 
    myNum.toString(), myNum.valueOf()];
    console.log(myArray);
    return myArray;
}

returnTests2();

module.exports = returnTests2;
