const values = require('./getSetUpdateObject');

test('Shirtsize updated by bracket operator work', () => {
    expect(values.shirtSize()).toEqual('Large');
});

test('No. of buttons by dot operator work', () => {
    expect(values.noOfButtons()).toEqual(7);
});

test('Colour updated by dot operator work', () => {
    expect(values.colour()).toEqual('Grey');
});

test('Varieties available updated by bracket operator work', () => {
    expect(values.varitiesAvailable()).toBeTruthy();
});
