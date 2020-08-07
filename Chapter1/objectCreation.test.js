const waell = require('./objectCreation');

const { age } = waell;
const mgender = waell.gender;
const twork = waell.working;

test('Return Gender properly', () => {
    expect(mgender()).toEqual('male');
});

test('Return true for working', () => {
    expect(twork()).toBeTruthy;
});

test('Crosschecking Gender Value', () => {
    expect(mgender()).not.toEqual('Female');
});

test('Age value is right or not', () => {
    expect(age()).toEqual(21);
});
