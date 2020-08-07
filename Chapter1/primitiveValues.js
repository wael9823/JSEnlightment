var primitiveString1 = 'Gitfoo'; // logs String (primitve)
var primitiveString2 = String('Gitfooood'); // logs String (primitve)
var complexString = new String ('Get food'); //logs object

console.log(typeof primitiveString1, typeof primitiveString2, typeof complexString);

module.exports.primitiveString1 = primitiveString1;
module.exports.primitiveString2 = primitiveString2;
module.exports.complexString = complexString;