const returnTests = require("./stringMethods");

describe('String methods ', () => {
    it('Verify that string methods produce right output', () => {
        expect(returnTests()).toEqual([
            's',
            'a',
            97,
            'This is a Long string.Long enough.',
            12,
            'This is',
            [ 'This', 'is', 'a', 'Long', 'string.' ],
            'THIS IS A LONG STRING.',
            'This is a Long string.'
          ]);
    });
});
