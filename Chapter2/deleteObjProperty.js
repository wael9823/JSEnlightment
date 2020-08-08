var object = {
    property1: 13,
    property2: 'goingToDeleteThis',
};

delete object.property2;

console.log('goingToDeleteThis' in object);
function returnObjProperty() {
    return object.property2;
}

console.log(object);

module.exports = returnObjProperty;
