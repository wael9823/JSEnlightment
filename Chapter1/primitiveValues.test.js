const myStrings = require('./primitiveValues');
const primitiveString1 = myStrings.primitiveString1;
const primitiveString2 = myStrings.primitiveString2;
const complexString = myStrings.complexString;

test('Primitive and complex strings are not same', () => {
    expect(typeof primitiveString1).not.toBe(typeof complexString);
})
