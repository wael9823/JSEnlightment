var myNumber = new Number(31);
var myString = new String('female');
var myBoolean = new Boolean(true);
var myObject = new Object();
var myArray = new Array('foo','bar');
var myFunction = new Function("x", "y", "return x+y");
var myDate = new Date();
var myRegExp = new RegExp('\bt[a-z]+\b');
var myError = new Error('Crap!');

// log/verify which constructor created the object
console.log(myNumber.constructor); // logs Number()
console.log(myString.constructor); // logs String()
console.log(myBoolean.constructor); // logs Boolean()
console.log(myObject.constructor); // logs Object()
console.log(myArray.constructor); //logs Array(), in modern browsers
console.log(myFunction.constructor); // logs Function()
console.log(myDate.constructor); // logs Date()
console.log(myRegExp.constructor); // logs RegExp()
console.log(myError.constructor); // logs Error()

module.exports = myBoolean;