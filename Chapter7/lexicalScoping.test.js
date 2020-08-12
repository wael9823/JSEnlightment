const returnWael = require("./lexicalScoping");

describe('The inner function can access variables of the outer function', () => {
    it('returnWael should give wael', () => {
        expect(returnWael()).toBe('Wael is Learning.');
    });
});
