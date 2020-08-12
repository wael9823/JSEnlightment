/* eslint-disable vars-on-top */
var Person = function Person() {
    this.name = 'John Doe';
};

Person.prototype.age = 21;
var person1 = new Person();

var returnAge1 = function() {
    return person1.age;
};

Person.prototype = {};
var person2 = new Person();

var returnAge2 = function() {
    return person2.age;
};
returnAge2();
module.exports.returnAge1 = returnAge1;
module.exports.returnAge2 = returnAge2;
