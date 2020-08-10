myfunction('wael', 21);

function myfunction(name, age) { // this is a function statement and it gets hoisted
    name = name;
    age = age;
    return (printInfo(name, age));
    function printInfo(name,age) { // this gets hoisted as well
        console.log(name + '\'s age is ' + age);
        return (name + '\'s age is ' + age);
    }
}

module.exports.func = myfunction;
