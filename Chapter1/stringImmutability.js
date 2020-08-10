/* STRINGS AND NUMBERS ARE IMMUTABLE whether they are in primitive or complex value
* This means that once they are created their value can't be altered
* All primitives are immutable, i.e., they cannot be altered. 
* It is important not to confuse a primitive itself with a variable assigned a primitive value. 
* The variable may be reassigned a new value, but the existing value can not be changed in the ways 
* that objects, arrays, and functions can be altered.
*/

var myString = 'I am immutable';
console.log(myString); // logs I am immutable
myString[2] = 'c';
console.log(myString); // logs I am immutable
myString.toUpperCase();
console.log(myString); // logs I am immutable
// string methods always return an entirely new string
myString = myString.toUpperCase();
console.log(myString); // logs I AM IMMUTABLE
// When we use an assignment operator,
// the new string value (Not a mutated one) is stored in previous one's place.
