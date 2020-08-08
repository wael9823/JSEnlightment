var myObject = {
    property1: 13,
    property2: 'goingToDeleteThis',
};

delete myObject.property2;

console.log('goingToDeleteThis' in myObject);
function returnObjProperty() {
    return myObject.property2;
}

console.log(myObject);

module.exports = returnObjProperty;
