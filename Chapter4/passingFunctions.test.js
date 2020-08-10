const sum = require('./passingFunctions');

test('If sum is returned properly', () => {
    expect(sum(11, 23)).toEqual(34);
});
