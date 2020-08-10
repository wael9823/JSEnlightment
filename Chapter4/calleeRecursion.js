var factorial = function(num){

    if(num ==1)
    return 1;
    else
    return num*arguments.callee(num-1);
};

console.log(factorial(3));

module.exports = factorial;
