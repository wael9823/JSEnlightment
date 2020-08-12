var myArray = ['world'];
function returnMsg() {
    console.log(myArray.msg); // Logs Hello, then Hi, then Bye
    return myArray.msg;
}

Object.prototype.msg = 'Hello';
returnMsg();

Array.prototype.msg = 'Hi'; // Shadowing Object.prototype.msg
returnMsg();

myArray.msg = 'Bye'; // First value found during chain lookup is taken
returnMsg();

module.exports = returnMsg;

