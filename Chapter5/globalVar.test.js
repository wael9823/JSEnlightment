const value = require('./globalVar');

const myObj = value.myObj;
const getLocalVar = value.getLocalVar;

test('checking the value of global variable', () => {
    expect(myObj.getGlobalVar()).toEqual('I can be accessed from everywhere');
});
