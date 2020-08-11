 var myObj = {
    city: 'Hyd',
    getCityHyd() {
        return (this.city);
    },
};

var cityName = myObj.getCityHyd();
console.log(cityName);

var myFunc = function() {};
myFunc.city = 'Chennai';
myFunc.getCityCh = function(){
    return (this.city);
}

var cityname = myFunc.getCityCh();
console.log(cityname); 

console.log(this);

module.exports.myObj = myObj;
module.exports.myFunc = myFunc;
