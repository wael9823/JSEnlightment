const value = require('./functionCitizens');

test('Check if value is number square plus ten',() => {
    expect(value()).toEqual(30);
});
