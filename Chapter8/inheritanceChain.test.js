const { isAlive, numberOfLegs, canWalk } = require("./inheritanceChain");


describe('Properties being inherited through prototype inheritance chain', () => {
    it('A cat is a living thing', () => {
        expect(isAlive()).toBeTruthy();
    });
    it('A cat has four legs', () => {
        expect(numberOfLegs()).toBe(4);
    });
    it('A cat can walk', () => {
        expect(canWalk()).toBeTruthy();
    });
});
