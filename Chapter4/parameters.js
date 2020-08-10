function sayHello(name, age, lastSentence) {
    if(lastSentence !== undefined)
    return name + " is " + age + " years old and is " + arguments[3]+". "+lastSentence;
    else{
    console.log('Here!');
    return name + " is " + age + " years old.";
    }
}

var myString1 = sayHello("Wael", 21, "Thats it.", "funny");
var myString2 = sayHello("Wael", 21);
console.log(myString1);
console.log(myString2);

module.exports = sayHello;
