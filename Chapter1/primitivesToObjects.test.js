const myStuff = require('./primitivesToObjects');

test('Primitives are converted to Objects momentarily', () => {
    expect(myStuff.myNumber()).not.toEqual(myStuff.myString());
});
