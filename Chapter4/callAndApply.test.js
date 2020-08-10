const allGreets = require('./callAndApply');

const english = allGreets.english;
const french = allGreets.french;
const urdu = allGreets.urdu;

test('Check if proper greeting is done', () => {
    expect(english.myFunction1.call(french, 'french', french.greeting)).toEqual('Welcome in FRENCH is said as Bienvenue');
});

test('Check if proper greeting is done', () => {
    expect(english.myFunction1.apply(urdu, ['urdu', urdu.greeting])).toEqual('Welcome in URDU is said as Khushamadeed');
});
