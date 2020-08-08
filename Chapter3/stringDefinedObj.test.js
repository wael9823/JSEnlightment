const myObj = require('./stringDefinedObj');

test('checking value of var', () => {
    expect(myObj.var).toEqual(10);
});

test('checking value of var', () => {
    expect(myObj.cost).toEqual(990);
});

test('checking value of var', () => {
    expect(myObj["8class"]).toEqual('casio');
});

test('checking value of var', () => {
    expect(myObj["type*"]).toEqual('scientific');
});
