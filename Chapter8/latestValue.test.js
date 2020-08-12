const printName = require("./latestValue");

describe('Properties of prototype get updated dynamically', () => {
    it('Person constructor prototype has initial property name Rohan', () => {
        expect(printName()).not.toBe('Rohan');
    });

    it('Person constructor prototype property name changes to Sameer', () => {
        expect(printName()).toBe('Sameer');
    });
});
