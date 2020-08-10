const check = require('./functionCreation');

const func1 = check.func1;
const func2 = check.func2;

test('Function1 is returning right info', () => {
    expect(func1('Raj', 17)).toEqual('Raj is 17 years old.');
});

test('Function2 is returning right info', () => {
    expect(func2('Raj', 17)).toEqual('Raj is 17 years old.');
});
