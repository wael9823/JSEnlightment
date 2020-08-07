var myNumber = new Number(23); // an object
var myNumberLiteral = 23; // primitive number value, not an object

var myString = new String('male'); // an object
var myStringLiteral = 'male'; // primitive string value, not an object

var myBoolean = new Boolean(false); // an object
var myBooleanLiteral = false; // primitive boolean value, not an object

var myObject = new Object(); 
var myObjectLiteral = {};

var myArray = new Array('foo', 'bar');
var myArrayLiteral = ['foo', 'bar']; 

var myFunction = new Function("x", "y", "return x+y");
var myFunctionLiteral = function(x, y) {return x+y}; 

// verify the new created an object from constructor

console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(myString.constructor, myStringLiteral.constructor);
console.log(myBoolean.constructor, myBooleanLiteral.constructor);
console.log(myObject.constructor, myObjectLiteral.constructor);
console.log(myArray.constructor, myArrayLiteral.constructor);
console.log(myFunction.constructor, myFunctionLiteral.constructor);

module.exports.myFunction = myFunction;
module.exports.myFunctionLiteral = myFunctionLiteral;