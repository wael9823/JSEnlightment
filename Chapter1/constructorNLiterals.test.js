const func = require('./constructorNLiterals');

const funcConst = func.myFunction;
const funcLiteral = func.myFunctionLiteral;

test('Both function using new() and function using function literal have same constructor', () => {
    expect(funcConst.constructor).toEqual(funcLiteral.constructor);
});

test('Both functions return sum', () => {
    expect(funcConst(2, 3)).toBe(funcLiteral(2, 3));
});
