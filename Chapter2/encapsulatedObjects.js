var encapsulatedPuzzle = {
    foo: {
        bar: [
            function puzzle() {
                return 'Puzzle';
            },
        ],
    },
};

console.log(encapsulatedPuzzle.foo.bar[0]());

module.exports = encapsulatedPuzzle.foo.bar[0]();
