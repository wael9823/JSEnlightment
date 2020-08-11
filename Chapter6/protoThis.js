var Person = function (name) {
    this.name = name;
};

Person.prototype.printName = function () {
    return this.name;
};

var asim = new Person('asim');
var zani = new Person('zani');

module.exports = asim;
