var myArray = [2, 3, 452, 32, 3, 1, 2, 32, 0, 86, 75, 27];
var mySet = new Set();

myArray.forEach(function (num, index, myArray) {
    mySet.add(num); // mySet.add(myArray[index]);
});


console.log('Set size is ' + mySet.size);

mySet.forEach(function(num, mySet) { console.log(num)});

function returnSet() {
    return Array.from(mySet);
}

module.exports = returnSet;
/* function uniqueArr(arr) {     // Can also be used
    for (var i = 0; i < myArray.length; i++) {
        mySet.add(myArray[i]);
    }
}
uniqueArr();
*/
