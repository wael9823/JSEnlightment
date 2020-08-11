const { myFunc } = require("./determiningThis");

describe('Ensure that this value is overriden from global Object to myObj', function () {
    it('myObj.myString is created and its value is Hello', function () {
        expect(printHello()).toBe('Hello');
    });
});