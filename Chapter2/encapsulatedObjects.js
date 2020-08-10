var encapsulatedPuzzle = {
    foo: {
        bar: [
            function puzzle() {
                return 'Puzzle';
            },
        ],
    },
};

var myArray = [[[[23]]]]; // encapsulated objects

var myFunction1 = function() { // encapsulated functions
    var myFunction2 = function(){
        console.log('bye');
    };
    myFunction2();
    return 'lol';
};

console.log(myArray[0][0][0][0]);

console.log(myFunction1());

console.log(encapsulatedPuzzle.foo.bar[0]());

module.exports = encapsulatedPuzzle.foo.bar[0]();
