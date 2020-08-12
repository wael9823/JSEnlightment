var animalArray = new Array('Cat', 'Dog', 'Horse', 'Sheep');

var birdArray = ['Sparrow', 'Crow', 'Pigeon', 'Eagle'];

birdArray[7] = { biggestBird: 'Ostrich' };

function printBirds() {
    return birdArray;
}

module.exports.birdArray = birdArray;
module.exports.printBirds = printBirds;
