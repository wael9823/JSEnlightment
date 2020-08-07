const myStrings = require('./primitiveEquality');
const string1 = myStrings.string1;
const string2 = myStrings.string2;
const string3 = myStrings.string3;
const string4 = myStrings.string4;
const string5 = myStrings.string5;
const string6 = myStrings.string6;

test('Primitives are equal by value', () => {
    expect(string1).toEqual(string2);
})
test('Composites are equal by reference', () => {
    expect(string3).toEqual(string5);
})
test('Composites and primitives are not equal', () => {
    expect(string3).not.toEqual(string4);
})