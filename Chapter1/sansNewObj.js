// Creating objects without using new keyword and constructor concept

var myCarObjectCreator = function (brand, colour, speed) {
    return {
        brand,
        colour,
        speed,
    };
};

var myCar1 = myCarObjectCreator('Honda', 'grey', 20);
var myCar2 = myCarObjectCreator('Maruti', 'white', 30);

console.log(myCar1); // displays the object but without constructor name
console.log(myCar2); // displays the object but without constructor name
console.log(myCar2.brand); // displays Maruti
console.log(myCar1.constructor); // logs Object
console.log(myCar1 instanceof myCarObjectCreator); // logs false
console.log(myCar1 instanceof Object); // logs true
console.log(myCar1 instanceof Function); // logs false
