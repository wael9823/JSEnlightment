var myFunc1 = function () {
    var myFunc2 = function (){
        console.log(this); // These are nested functions, they log global object & are lost
    }();
    console.log(this);
}();

var myObj1 = {
    myString1 : '1st Object',
    myFunc3 : function (anon) {
        anon(); // logs global object as the anonymous function is called from global scope
        console.log(this); // logs myObj1
        var myFunc5 = function lostIt() { console.log(this)}; // logs global object and is lost
        myFunc5();
    }
};

var myObj2 = {
    myString2: '2nd Object',
    myFunc4 : function () {
        console.log(this); // logs myObj2
    }
};

myObj1.myFunc3(function () { console.log(this); });

myObj2.myFunc4();
