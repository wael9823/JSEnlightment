var myfunc = function (num1, num2) {
    console.log(arguments.callee.length);
    console.log(myfunc.length);
    console.log(arguments.length);
    return num1 + num2;
}

var People = function() {
    this.name = 'Human';
};

var per1 = new People();
console.log(People.prototype);
console.log(per1.constructor);

People.prototype = {};
People.prototype.constructor = People;

var per2 = new People();
console.log(People.prototype);
console.log(per2.constructor);

var myObj = { name: 'wael'};

console.log(myfunc.prototype);

myfunc(3, 2, 4);

console.log(this);
