var Person = function (name) {
    this.name = name || 'John Doe'; // Or short circuit (undef||value) = value
};

var wael = Person();

// console.log(wael.name); generates error
console.log(globalThis.name); // Logs John Doe
