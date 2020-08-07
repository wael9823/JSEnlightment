const myStrings = require('./primitiveValues');

const { primitiveString1 } = myStrings;
const { complexString } = myStrings;

test('Primitive and complex strings are not same', () => {
    expect(typeof primitiveString1).not.toBe(typeof complexString);
});
