var number = 100;
var myFunc1 = function () {
    var number = 42;
    var myFunc2 = function () {
        var number = 10;
        return number;
    }();
    return myFunc2;
};

var printNumber = myFunc1;

module.exports = printNumber;
