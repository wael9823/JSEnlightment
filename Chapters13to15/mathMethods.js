var num1 = Math.abs(-4598.2312);
var num2 = Math.sqrt(2354);
var myArray = [Math.abs(-4598.2312), Math.sqrt(2354), Math.floor(-4598.2312), Math.exp(85, 3)];
var myMax = Math.max(Math.abs(-4598.2312), Math.sqrt(2354), Math.floor(-4598.2312), Math.exp(85, 3));


function returnNumbers() {
    return myArray;
}

function returnMax() {
    return myMax;
}

module.exports.returnNumbers = returnNumbers;
module.exports.returnMax = returnMax;
