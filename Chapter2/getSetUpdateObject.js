/* eslint-disable vars-on-top */
var myShirt = {};

// Setting values using dot and bracket operators
// bracket operator to be used only as needed or to demonstrate special property

myShirt.shirtSize = 'Medium';
myShirt.noOfButtons = 10;
myShirt.colour = 'Red';
myShirt.var = false;

// Getting values using dot and bracket operators
function getShirtSize() {
    return myShirt.shirtSize;
}
function getNoOfButtons() {
    return myShirt.noOfButtons;
}
function getColour() {
    return myShirt.colour;
}
function getShirtVariants() {
    return myShirt['var'];
}

// Updating values using dot and bracket operators
var string1 = 'shirt';
var string2 = 'Size';

myShirt[string1 + string2] = 'Large';
myShirt.noOfButtons = 7;
myShirt.colour = 'Grey';
myShirt['var'] = true;

console.log(myShirt);

module.exports.shirtSize = getShirtSize;
module.exports.noOfButtons = getNoOfButtons;
module.exports.colour = getColour;
module.exports.varitiesAvailable = getShirtVariants;
