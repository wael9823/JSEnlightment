/* eslint-disable no-restricted-syntax */
var customObject = {
    prop1: 'something',
    prop2: null,
    prop3: undefined,
};

function totalOwnProperties(obj) {
    var propNumber = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
            propNumber++;
        }
    }
    return propNumber;
}

totalOwnProperties(customObject);

module.exports = totalOwnProperties(customObject);

