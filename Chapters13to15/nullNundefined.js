var person = {
    name: null,
    age: 21,
};

var iAmUndefined;

function getMyName() {
    return person.name;
}

function getMyGender() {
    return person.gender;
}

function getMyVar() {
    return iAmUndefined;
}

module.exports.getMyGender = getMyGender;
module.exports.getMyName = getMyName;
module.exports.getMyVar = getMyVar;
