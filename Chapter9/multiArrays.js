var myMultiArray = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

function showR1C0() {
    return myMultiArray[1][0];
}
function showR1C1() {
    return myMultiArray[1][1];
}
function showR1C2() {
    return myMultiArray[1][2];
}

module.exports.showR1C0 = showR1C0;
module.exports.showR1C1 = showR1C1;
module.exports.showR1C2 = showR1C2;
