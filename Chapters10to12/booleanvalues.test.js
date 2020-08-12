const values = require("./booleanValues");
const showFalseObject = values.showFalseObject;
const printBooleans = values.printBooleans;

describe('Boolean values ', () => {
    it('Verify that boolean values produce right output', () => {
        expect(printBooleans()).toEqual([
            false, false,
            false, false,
            false, false,
            false, true
          ]);
    });
    it('False Object is truthy', () => {
        expect(showFalseObject()).toBe('falseObject is truthy');
    });
});
