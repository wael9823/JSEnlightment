var animalArray = new Array('Cat', 'Dog', 'Horse', 'Sheep');

var birdArray = ['Sparrow', 'Crow', 'Pigeon', 'Eagle'];

birdArray[7] = { biggestBird: 'Ostrich' };

function printBirds() {
    return birdArray;
}
function firstAnimal() {
    console.log(animalArray[0]);
    return animalArray[0];
}

module.exports.birdArray = birdArray;
module.exports.printBirds = printBirds;
module.exports.firstAnimal = firstAnimal;
