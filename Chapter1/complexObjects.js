var carObject = {
    brand: 'Honda', // Initial brand name of carObject
    colour: 'Red',
    maxSpeed: 2,
};

var copyOfCarObject = carObject; // Copying of carObject - copying of address of carObject actually

copyOfCarObject.brand = 'Maruti'; // Brand name changed of copy

console.log(carObject.brand); // Logs Maruti as both carObject and its copy reference same memory

module.exports.brand1 = carObject.brand;
module.exports.brand2 = copyOfCarObject.brand;
