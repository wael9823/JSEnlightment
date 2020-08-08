const objProperty = require('./deleteObjProperty');

test('Object property deleted does not exist', () => {
    expect(objProperty()).not.toBeTruthy();
});
