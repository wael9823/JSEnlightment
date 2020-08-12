var LivingThings = function() {
    this.alive = true;
};

LivingThings.prototype.eat = true;

var Animal = function() {
    this.legs = 4;
    this.walks = true;
};

Animal.prototype = new LivingThings();

var cat = new Animal();

function isAlive(){
    return cat.alive;
}
function numberOfLegs(){
    return cat.legs;
}
function canWalk(){
    return cat.walks;
}

module.exports.isAlive = isAlive;
module.exports.numberOfLegs = numberOfLegs;
module.exports.canWalk = canWalk;
