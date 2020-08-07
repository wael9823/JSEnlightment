/*
This is the first method where we directly instantiate the Object() object to create a single object
 using the Object() constructor
*/

// create the wael object...
var wael = new Object();

// then fill the wael object with properties (using dot notation)
wael.working = true;  
wael.age = 21;
wael.gender = 'male';
// these properties are static in nature

wael.getAge = function(){
    return wael.age;
};
wael.getWorking = function(){
    return wael.working;
};
wael.getGender = function(){
    return wael.gender;
}


console.log(wael); // logs Object {working = true, age = 21, gender = 'male'}


module.exports.age = wael.getAge;
module.exports.working = wael.getWorking;
module.exports.gender = wael.getGender;

// Thus we get back an object as the object literal { } is present with the property(name) and value pair
