/* eslint-disable prefer-destructuring */
const myObjects = require('./complexEquality');

const name1 = myObjects.name1;
const name2 = myObjects.name2;

console.log(name1);
console.log(name1.name);
console.log(name1.age);

console.log(name2);
console.log(name2.name);
console.log(name2.age);

test('Complex objects are only equal by reference', () => {
    expect(name1).not.toBe(name2);
});

test('Properties of complex objects can be same if they are primitive', () => {
    expect(name1.name).toBe(name2.name);
});

test('Properties of complex objects can\'t be same if they are complex', () => {
    expect(name1.age).not.toBe(name2.age);
});
