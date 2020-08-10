/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
var Person = function (name, age) {
    this.name = name;
    this.age = age;
};

var asim = Person('Asim', 22); // trying to use constructor function without new keyword
console.log(asim); // logs undefined

var wael = new Person('Wael', 21); // new was used here
console.log(wael); // logs the object with the properties

wael.isWorking = true;

Person.prototype.isStudying = false;

for (var key in wael) { // logs all properties that are enumerable (inherited & own ones as well)
    console.log(key); // logs name,age,isWorking and isStudying
}

console.log('Next stuff');

for (var key in wael) {
    if (wael.hasOwnProperty(key)) { // logs properties that are own and enumerable
        console.log(key); // logs name age isWorking
    }
}

console.log('checking isStudying');
console.log(wael.isStudying); // logs false
