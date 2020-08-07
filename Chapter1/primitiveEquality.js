var string1 = 'foo'; // Primitive
var string2 = 'foo'; // Primitive
var string3 = new String('foo'); // complex
var string4 = string3; // complex
var string5 = string3; // complex
var string6 = new String('foo'); // complex

console.log(string1 === string2); // logs true
console.log(string1 === string3); // logs false
console.log(string3 === string4); // logs true

string4 = 'foosball'; // Changed from complex to primitive
console.log(string3 === string4); // logs false due to change
console.log(string3 === string5); // logs true

console.log(string3 === string6); // logs false as Value same but are referenced differently

module.exports.string1 = string1;
module.exports.string2 = string2;
module.exports.string3 = string3;
module.exports.string4 = string4;
module.exports.string5 = string5;
module.exports.string6 = string6;
