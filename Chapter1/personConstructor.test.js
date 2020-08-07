const wael = require('./personConstructor.js');

test('Check Gender of new person is male', () => {
    expect(wael.getGender()).toEqual('male');
});
