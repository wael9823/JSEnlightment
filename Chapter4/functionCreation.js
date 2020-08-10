var myFunction1 = new Function('name', 'age', 'return name + " is " + age + " years old."');

var myFunction2 = function (name, age) {
    return name + ' is ' + age + ' years old.';
};

var personInfo = myFunction1('Wael', 21);
console.log(personInfo);

var info = myFunction2('Asim', 22);
console.log(info);

module.exports.func1 = myFunction1;
module.exports.func2 = myFunction2;
