const myFunc = require('./hoistingOfFunc');
const func = myFunc.func;

test('See that output is right', () => {
    expect(myFunc.func('Sam', 17)).toEqual('Sam\'s age is 17');
});
