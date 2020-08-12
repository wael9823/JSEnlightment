const { returnMax, returnNumbers} = require("./mathMethods");
describe('String methods ', () => {
    it('Verify that myGender is undefined', () => {
        expect(returnMax()).toEqual(8.223012714622913e+36);
    });
    it('Verify that myVar is undefined', () => {
        expect(returnNumbers()).toEqual([ 4598.2312, 48.518037882832814, -4599, 8.223012714622913e+36 ]);
    });
});
