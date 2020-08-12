/* eslint-disable no-undef */
var dotString = '.';
var myOuterFunc = function () {
    var wael = 'Wael';
    var myInnerFunc1 = function () {
        var asim = 'Asim';
        return wael + ' is Learning' + dotString;
    };
    var myInnerFunc2 = (function() {
        // return asim; gives a ReferenceError that asim is not defined
    }());
    return myInnerFunc1;
};

var returnWael = myOuterFunc();

module.exports = returnWael;
