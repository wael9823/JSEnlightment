const { myArray, showOriginalLength } = require("./removingValues");

describe('Removing of values from an Array using length', () => {
    it('Original length was 8', () => {
        expect(showOriginalLength()).toBe(8);
    });
    it('New length was 2', () => {
        expect(myArray.length).toBe(2);
    });
    it('New Array doesnt have 75', () => {
        expect(myArray).not.toContain(75);
    });
});
