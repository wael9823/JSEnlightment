var myFunction1 = new Function('name', 'age', 'return name + " is " + age + " years old."');
// The last parameter is the function body and is parsed using eval()
// This is known as the constructor form

var myFunction2 = function (name, age) {
    return name + ' is ' + age + ' years old.';
};

var personInfo = myFunction1('Wael', 21); // expression form
console.log(personInfo);

var info = myFunction2('Asim', 22);
console.log(info);

// console.log(myFunction2.arguments);
console.log(myFunction2.length); // logs 2
console.log(myFunction2.constructor); // logs Function
console.log(Function.prototype); // logs Function

module.exports.func1 = myFunction1;
module.exports.func2 = myFunction2;
