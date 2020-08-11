const asim = require("./protoThis");

describe('Print the right name', () => {
    it('this operator returns object property name', () => {
        expect(asim.printName()).toBe('asim');
    });
});
