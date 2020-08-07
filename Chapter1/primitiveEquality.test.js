/* eslint-disable no-unused-vars */
const myStrings = require('./primitiveEquality');

const { string1 } = myStrings;
const { string2 } = myStrings;
const { string3 } = myStrings;
const { string4 } = myStrings;
const { string5 } = myStrings;
const { string6 } = myStrings;

test('Primitives are equal by value', () => {
    expect(string1).toEqual(string2);
});
test('Composites are equal by reference', () => {
    expect(string3).toEqual(string5);
});
test('Composites and primitives are not equal', () => {
    expect(string3).not.toEqual(string4);
});
