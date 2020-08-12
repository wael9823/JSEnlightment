const returnTests2 = require("./numberMethods");

describe('String methods ', () => {
    it('Verify that string methods produce right output', () => {
        expect(returnTests2()).toEqual([
            '4.5982398e+3',
            '4598.240',
            '4,598.24',
            '4.60e+3',
            '4598.2398',
            4598.2398
          ]);
    });
});