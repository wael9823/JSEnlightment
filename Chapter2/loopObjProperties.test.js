const totalOwnProperties = require('./loopObjProperties');

test('Custom Object has 3 properties I made', () => {
    expect(totalOwnProperties).toEqual(3);
});
