const messages = require('./lastStop');

describe('The first value found is taken in the scope chain', () => {
    it('returnMsg should be Hello', () => {
        expect(messages()).not.toBe('Hello');
    });
    it('returnMsg should be Hi', () => {
        expect(messages()).not.toBe('Hi');
    });
    it('returnMsg should be Bye', () => {
        expect(messages()).toBe('Bye');
    });
});
