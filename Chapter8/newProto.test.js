const { returnAge1, returnAge2 } = require("./newProto");

describe('Prototype of a function can be changed', () => {
    it('Person constructor prototype has Age property set to 21', () => {
        expect(returnAge1()).toBe(21);
    });

    it('Person constructor prototype changes to object constructor', () => {
        expect(returnAge2()).toBeUndefined();
    });
});
