var primNumber1 = 23;
var primNumber2 = primNumber1;


function printPrimType(){
    console.log(typeof primNumber1);  //logs number
    return(typeof primNumber1);
}

function printPrimString(){
    console.log(primNumber1.toString()); //prints number as string and works as a complex object
    return(primNumber1.toString());
}

function printStringType(){
    console.log(typeof primNumber1.toString()); //logs string
    return(typeof primNumber1.toString());
}

function printPrimBack(){
    console.log(typeof primNumber1); //logs as number again
    return(typeof primNumber1);
}

printPrimType();
printPrimString();
printStringType();
printPrimBack();

module.exports.myNumber = printPrimType;
module.exports.myString = printStringType;

