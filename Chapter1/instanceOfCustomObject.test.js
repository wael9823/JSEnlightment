const myObjects = require('./instanceOfCustomObject');
const { exportAllDeclaration } = require('@babel/types');
const customObject = myObjects.cust;
const nativeObject = myObjects.native;

test('customObject is an instance of my custom object car', () => {
    expect (customObject()).toBeTruthy();
});

test('nativeObject is an instance of an Array object', () => {
    expect(nativeObject()).toBeTruthy();
});
