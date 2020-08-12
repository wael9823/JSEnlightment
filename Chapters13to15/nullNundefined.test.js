const { getMyGender, getMyVar, getMyName } = require("./nullNundefined");

describe('String methods ', () => {
    it('Verify that myGender is undefined', () => {
        expect(getMyGender()).toBeUndefined();
    });
    it('Verify that myVar is undefined', () => {
        expect(getMyVar()).toBeUndefined();
    });
    it('Verify that myName is null', () => {
        expect(getMyName()).toBeNull();
    });
});
