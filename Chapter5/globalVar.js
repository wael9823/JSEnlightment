var globalVar = 'I can be accessed from everywhere';

var myObj = {
    type: 'Object',
    localVar: 'I am accessible only in this object',
    getGlobalVar: function(){
        console.log(globalVar);
        return globalVar;
    },

};

var getLocalVar = function(){
    console.log(localVar);
    return localVar;
};

myObj.getGlobalVar(); // logs I can be accessed from everywhere
// getLocalVar(); gives an error as localVar is not present in global scope

module.exports.myObj = myObj;
module.exports.getLocalVar = getLocalVar;
