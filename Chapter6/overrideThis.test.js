const printHello = require("./overrideThis");

describe('Ensure that this value is overriden from global Object to myObj', () => {
    it('myObj.myString is created and its value is Hello', () => {
        expect(printHello()).toBe('Hello');
    });
});
