const { showR1C0, showR1C1, showR1C2 } = require("./multiArrays");

describe('Values  in a 3x3 identity matrix ', () => {
    it('value at [1][0] = 0', () => {
        expect(showR1C0()).toBe(0);
    });
    it('value at [1][1] = 1', () => {
        expect(showR1C1()).toBe(1);
    });
    it('value at [1][2] = 0', () => {
        expect(showR1C2()).toBe(0);
    });
});