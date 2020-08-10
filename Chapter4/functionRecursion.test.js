const operation = require('./functionRecursion');
const fact = operation.fact;
const count = operation.count;

test('Check if function returns factorial',() => {
    expect(fact(2)).toEqual(2);
});

test('Check if function returns factorial',() => {
    expect(count(2)).toEqual('Done counting till 10');
});
