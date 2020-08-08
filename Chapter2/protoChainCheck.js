var myFan = {
    noOfBlades: 3,
    company: 'Hitachi',
    colour: 'white,',
};

function objectOwnProperty(stringValue1) {
    return (myFan.hasOwnProperty(stringValue1));
}

function objProtoProperty(stringValue2) {
    return (stringValue2 in myFan);
}

console.log(objectOwnProperty('company')); // logs true
console.log(objectOwnProperty('toString')); // logs false
console.log(objProtoProperty('company')); // logs true
console.log(objProtoProperty('toString')); // logs true

module.exports.proto = objProtoProperty;
module.exports.own = objectOwnProperty;