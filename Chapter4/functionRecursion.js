// Recursion using arguments.callee()
var factorial = function (num) {
    if (num === 1) return 1;
    return num * arguments.callee(num - 1);
};

// Recursion using function name
var countTillTen = function (num) {
    if (num < 10 && num >= 0) {
        //console.log(num);
        num++;
        return countTillTen(num);
    } if (num === 10) {
        return 'Done counting till '+ num;
    }
    return 'You should have entered number between 0 to 9.';
};

var myNumberList = countTillTen(7);
console.log(myNumberList);

console.log(factorial(3));

module.exports.fact = factorial;
module.exports.count = countTillTen;
