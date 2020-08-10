var boy1 = {
    name: 'Ravi',
    age: 21,
};

var boy2 = {
    name: 'Ravi',
    age: new Number(21),
};

console.log(boy1 === boy2); // logs false as they reference two different objects
// though they have same properties
console.log(boy1.name === boy2.name); // Real reason, boy1.name and boy2.name are primitive strings
// And primitives are compared by value
// They point to same string is wrong as there is no pointing business in primitives

console.log(boy1.age === boy2.age); // logs false as boy1 age is primitive and boy2 age is complex..

module.exports.name1 = boy1;
module.exports.name2 = boy2;
