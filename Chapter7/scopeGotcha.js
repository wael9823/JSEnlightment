var myFunc = function() {
    wael = 'Wael';
    var asim = 'Asim';
    var nameString = function() {
        return wael+' '+asim;
    };
    return nameString;
};

var printWael = function(){
    console.log(wael);
    return wael;
};

var nameStored = myFunc();

module.exports.printWael = printWael;
module.exports.nameStored = nameStored;
