/* eslint-disable prefer-destructuring */
const myObjects = require('./complexEquality');

const name1 = myObjects.name1;
const name2 = myObjects.name2;

test('Complex objects areonly equal by reference', () => {
    expect(name1).not.toEqual(name2);
})