const value = require('./usageOfThis');
const { exportAllDeclaration } = require('@babel/types');

const myObj = value.myObj;
const myFunc = value.myFunc;

test('City Name to be Hyd', () => {
    expect(myObj.getCityHyd()).toBe('Hyd');
});

test('City Name to be Chennai', () => {
    expect(myFunc.getCityCh()).toBe('Chennai');
});
