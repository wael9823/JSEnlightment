var myFunc = function () {
    this.myString = 'Hello';
};

var myObj = {
    printHello : function () {
        return myObj.myString;
    },
};

myFunc.call(myObj, 'Hello');
console.log(myObj.printHello()); // logs hello

module.exports = myObj.printHello;
