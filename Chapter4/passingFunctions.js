var calculateSum = function(func) {
    return func;
};

var sumFunc = calculateSum(function(num1,num2) { return num1+num2; });
console.log(sumFunc(3, 6));

module.exports = sumFunc;