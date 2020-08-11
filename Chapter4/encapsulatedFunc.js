var head = (function () {
    var mid = (function () {
        var bottom = (function () {
            console.log(this); // logs global object with its properties
            console.log('In bottom'); // executes first
            return 1;
        }());
        console.log('In mid'); // executes second
        return 2;
    }());
    console.log('In Head'); // executes last
    return 3;
}());

console.log(head);
// console.log(mid); logs error, mid is not defined
