var wishHappyBirthday = function (name) { // self-invoking function expression
    return 'Happy Birthday '+name+'!';
}('Someone');

(function (msg) { // self-invoking anonymous function statement1
    console.log(msg);
})('Bye');

(function(msg) { // self-invoking anonymous function statement1
    console.log(msg);
}('Hi'));

!function saySalut (msg) { console.log('Salut');}(); // self-invoking anonymous function statement1

console.log(wishHappyBirthday);

module.exports = wishHappyBirthday;
