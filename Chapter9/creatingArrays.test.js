const values = require("./creatingArrays");

const birdArray = values.birdArray;
const printBirds = values.printBirds;


describe('Creation of Arrays', () => {
    it('Bird Array has all the elements as specified', () => {
        expect(birdArray).toEqual(["Sparrow", "Crow", "Pigeon", "Eagle", undefined, undefined, undefined, {"biggestBird": "Ostrich"}]);
    });
    it('Bird Array has all the elements as specified', () => {
        expect(printBirds()).toEqual(["Sparrow", "Crow", "Pigeon", "Eagle", undefined, undefined, undefined, {"biggestBird": "Ostrich"}]);
    });
    it('Bird Array has all the elements as specified', () => {
        expect(values.firstAnimal()).toEqual("Cat")
    });     
});
