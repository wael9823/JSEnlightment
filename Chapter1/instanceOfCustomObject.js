/* eslint-disable vars-on-top */
var Car = function Car() {
    this.typeOfCar = 'Racing';
};

var bmw = new Car();

function isbmwInstanceOfCar() {
    return (bmw instanceof Car);
}

console.log(bmw instanceof Car); // logs true

var myArray = [];

function isMyArrayInstanceOfArray() {
    return (myArray instanceof Array);
}

console.log(myArray instanceof Array); // logs true

module.exports.cust = isbmwInstanceOfCar;
module.exports.native = isMyArrayInstanceOfArray;
