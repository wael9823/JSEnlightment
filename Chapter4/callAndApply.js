var englishGreetings ={
    myFunction1: function() {
        arguments[0] = arguments[0].toUpperCase(); // Redifining function parameters
        return 'Welcome in '+ arguments[0] +' is said as '+arguments[1];
    }
};

var frenchGreeting = {
    greeting: 'Bienvenue',
};

var urduGreeting = {
    greeting: 'Khushamadeed',
};

console.log(englishGreetings.myFunction1.call(frenchGreeting, 'french', frenchGreeting.greeting));
// Welcome in FRENCH is said as Bienvenue
console.log(englishGreetings.myFunction1.apply(urduGreeting, ['urdu', urduGreeting.greeting]));
// Welcome in URDU is said as Khuhamadeed

module.exports.english = englishGreetings;
module.exports.french = frenchGreeting;
module.exports.urdu = urduGreeting;
