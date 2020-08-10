/* eslint-disable vars-on-top */
// functions stored as variables, arrays and objects
var getTrue = function() { return true };
var getTrueVar = getTrue();
console.log(getTrueVar);

var myArray = [ function(){}, 'JS', 5]; 
var undefVar = myArray[0]; // Undefined is returned by default
console.log(undefVar);

var myObj = {
    name: 'Javascript',
    myMethod: function() { return myObj.name+' is Awesome!'}
};
var jsVar = myObj.myMethod();
console.log(jsVar);

// functions being sent and returned
var funcD = function(func){
    return func;
}

var runFuncD = funcD(function(){console.log('Hi');});

runFuncD();
// Finding the square of a number plus number

var sqPlusFunc = function (func, num) {
    func.num = num; // Functions are objects as well and can have properties
    return func;
};

var rsqPlusFunc = sqPlusFunc(function myFunc(){ return myFunc.num*myFunc.num+myFunc.num; },5);

var res = rsqPlusFunc(5);
console.log(res);

module.exports = rsqPlusFunc;
