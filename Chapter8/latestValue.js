var Person = function () {};
Person.prototype.name = 'Rohan';

var newGuy = new Person();

Person.prototype.name = 'Sameer';

function printName() {
    return newGuy.name;
}

module.exports = printName;
