const brandName = require('./complexObjects');

const name1 = brandName.brand1;
const name2 = brandName.brand2;

test('Copied objects reference same object', () => {
    expect(name1).toEqual(name2);
})