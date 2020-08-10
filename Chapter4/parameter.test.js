const myIntro = require('./parameters');

test('Check result when parameters are less', () => {
    expect(myIntro('Sam', 17)).toEqual('Sam is 17 years old.');
});

test('Check result when parameters are more', () => {
    expect(myIntro('Sam', 17, 'Bye.', 'smart')).toEqual('Sam is 17 years old and is smart. Bye.');
});
