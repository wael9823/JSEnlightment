var aString = 'Hello';
var aNum = 924;
var aFunc = function() {};

myString = 'Bye'; // These stuff get stored in the globalObject
myNum =429;
myFunc = function() {};

console.log(this); // logs {}

console.log('myString' in globalThis); // logs true
console.log('myString' in this); // logs false

console.log('aString' in globalThis); // logs false
console.log('aString' in this); // logs false

// In browsers, the top-level scope is the global scope.
// This means that within the browser var something will define a new global variable.
// In Node.js this is different. The top-level scope is not the global scope;
// var something inside a Node.js module will be local to that module.
// If var is not declared it goes into the globalThis object {}

globalRef1 = this;
globalRef2 = globalThis; // {}

console.log(globalRef1); // logs {}
console.log(globalRef2); // logs the global object with its properties such as setInterval
