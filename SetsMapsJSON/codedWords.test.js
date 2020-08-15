const { encodeStr, decodeStr } = require("./codedWords");

describe('Our coded and decoded words should be same', () => {
    it('Matching coded and decoded words', () => {
        expect(encodeStr('zani')).toEqual('aboj');
    });
    it('Matching coded and decoded words', () => {
        expect(decodeStr('aboj')).toEqual('zani');
    });
    it('Matching coded and decoded words', () => {
        expect('kickass').toEqual(decodeStr(encodeStr('kickass')));
    });
});
