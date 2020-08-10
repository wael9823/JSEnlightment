/* eslint-disable vars-on-top */
// cloning or copying of objects without having same reference

var otherObj = { name: 'asim' };
// copying using Object.assign creates a shallow copy

var myObj = Object.assign({},otherObj);
console.log(myObj.name);
myObj.name = 'zani';
console.log(myObj.name);
console.log(otherObj);
console.log('---------------------');

// copying using spread operator creates a shallow copy

var newObj = {
    ...otherObj
};
console.log(newObj.name);
newObj.name = 'zanilain';
console.log(newObj.name);
console.log(otherObj);
console.log('---------------------');

// copying using JSON creates a deep copy

var finObj = JSON.parse(JSON.stringify(otherObj));
console.log(finObj.name)
finObj.name = 'waelah';
console.log(finObj.name)
console.log(otherObj);
