const funcs = require("./scopeGotcha");

const printWael = funcs.printWael;
const nameStored = funcs.nameStored;

describe('variable scope is global when definition doesnt have var', () => {
    it('printWael should give wael', () => {
        expect(printWael()).toBe('Wael');
    });

    it('returnAsim should be undefined', () => {
        expect(nameStored()).toBe('Wael Asim');
    });
});
