var myCodeMap = new Map();
var myReverseCodeMap = new Map();

// Code map is set such that a->b, b->c and so on till y->z. For z, z->a
for (let i = 97; i < 123; i++) {
    if (i === 122) {
        myCodeMap.set(String.fromCharCode(i), String.fromCharCode(97));
    } else {
        myCodeMap.set(String.fromCharCode(i), String.fromCharCode(i + 1));
    }
}

// Reverse Code map is set such that b->a, c->b and so on till z->y. For a, a->z
for (let i = 122; i > 96; i--) {
    if (i === 97) {
        myReverseCodeMap.set(String.fromCharCode(i), String.fromCharCode(122));
    } else {
        myReverseCodeMap.set(String.fromCharCode(i), String.fromCharCode(i - 1));
    }
}

var myString = 'zani';
var codedString = '';
var decodedString = '';

function encodeStr(str) {
    let codedString = '';
    for (let letter of str) {
        codedString += myCodeMap.get(letter);
    }
    console.log(codedString);
    return codedString;
}

function decodeStr(str) {
    let decodedString = '';
    for (let letter of str) {
        decodedString += myReverseCodeMap.get(letter);
    }
    console.log(decodedString);
    return decodedString;
}

// encodeStr(myString.toLowerCase());
// decodeStr(codedString);

module.exports.encodeStr = encodeStr;
module.exports.decodeStr = decodeStr;
