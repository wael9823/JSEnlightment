var boy1 = {
    name: 'Ravi',
    age: 21,
};

var boy2 = {
    name: 'Ravi',
    age: new Number(21),
};

console.log(boy1 === boy2); // logs false as they are different objects with similar properties 
console.log(boy1.name === boy2.name); // logs true as they point to same string?
console.log(boy1.age === boy2.age); // logs false as boy1 age is primitive and boy2 age is native..

module.exports.name1 = boy1;
module.exports.name2 = boy2;

