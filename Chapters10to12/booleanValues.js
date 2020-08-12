var falseObject = new Boolean(false);

function showFalseObject () {
    if (falseObject) {
        return 'falseObject is truthy';
    }
}

var myArray = [];

function printBooleans() {
    myArray = [Boolean(0), Boolean(-0), Boolean(null), Boolean(false), Boolean(''), Boolean(undefined),
    Boolean(null), Boolean('Everything elseis truthy')];
    return myArray;
}

module.exports.showFalseObject = showFalseObject;
module.exports.printBooleans = printBooleans;
