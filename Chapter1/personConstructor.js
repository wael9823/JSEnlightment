// define person constructor function in order to create custom Person() objects later
var person = function(working, age, gender) {
    this.working = working;
    this.age = age;
    this.gender = gender;
    this.getGender = function() {return this.gender;};
};

// instantiate a Person object and store it in the cody variable
var wael = new person(true, 21, 'male');

//console.log(wael.getGender());

module.exports = wael;

