// Based on which function is called in runtime, the value of 'this' changes

myString = 'I am a global String';

var myFunc = function() {
    var thisFunc = this.myString;
    console.log(thisFunc);
    return(thisFunc); 
}

var myObj = {
    myString: 'I am a string in myObj',
};

myObj.myFunc = myFunc;

myFunc();
myObj.myFunc();

module.exports.myFunc = myFunc;
module.exports.myObj = myObj;
