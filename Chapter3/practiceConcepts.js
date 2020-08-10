var Person = function PersonConst(age, name) {
    this.age = age;
    this.person = name;
};

var wael = new Person(17, 'Wael');

console.log(wael); // displays the object with constructor name PersonConst
console.log(typeof wael); // logs object
console.log(wael.constructor); // logs PersonConst
console.log(wael instanceof Person); // logs true
console.log(wael instanceof Object); // logs true
console.log(wael instanceof Function); // logs false

console.log(typeof Person); // logs function
console.log(typeof Function); // logs function
console.log(Person.constructor); // logs Function
console.log(Person instanceof Function); // logs true
console.log(Person instanceof Object); // logs true
console.log(Function instanceof Object); // logs true

console.log(wael.__proto__); // logs PersonConst {}
console.log(wael.prototype); // undefined
console.log(Person.__proto__); // logs Function
console.log(Person.prototype); // logs PersonConst {}

var myArray = new Array(1,23,42);
console.log(myArray);
console.log(myArray.constructor); // logs Array
console.log(typeof myArray); // lgs object

console.log(Math.abs(-20)); // logs 20
console.log(Math.PI); // logs 3.141592653689793
Math.phi = 1.618;
console.log(Math.phi); // logs 1.618
