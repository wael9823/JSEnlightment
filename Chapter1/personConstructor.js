/* eslint-disable func-names */
// define person constructor function in order to create custom Person() objects later

// Use caps for object constructor functions
var Person = function (working, age, gender) {
    this.working = working;
    this.age = age;
    this.gender = gender;
    this.getGender = function () { return this.gender; };
};

// instantiate a Person object and store it in the cody variable
var wael = new Person(true, 21, 'male');

// console.log(wael.getGender());

module.exports = wael;
