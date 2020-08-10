const fact = require('./calleeRecursion');

test('Check if function returns factorial',() => {
    expect(fact(2)).toEqual(2);
});
