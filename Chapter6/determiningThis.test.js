const myStuff = require('./determiningThis');

const myFunc = myStuff.myFunc;
const myObj = myStuff.myObj;

test('checking the value of this in global function', () => {
    expect(myFunc()).toEqual('I am a global String');
});

test('checking the value of this in object function', () => {
    expect(myObj.myFunc()).toEqual('I am a string in myObj');
});
