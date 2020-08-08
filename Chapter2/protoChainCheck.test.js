const check = require('./protoChainCheck');

const own = check.own;
const proto = check.proto;

test('company is own property of object', () => {
    expect(own('company')).toBeTruthy();
});

test('toString is own property of object', () => {
    expect(own('toString')).not.toBeTruthy();
});

test('company is either in object or its prototype chain property ', () => {
    expect(proto('company')).toBeTruthy();
});

test('toString is either in object or its prototype chain property ', () => {
    expect(proto('toString')).toBeTruthy();
});
