const returnSet = require("./uniqueValues");

describe('A set should only have unique values', () => {
    it('Only unique numbers are allowed', () => {
        expect(returnSet()).toEqual([2,
            3,
            452,
            32,
            1,
            0,
            86,
            75,
            27]);
    });
});
