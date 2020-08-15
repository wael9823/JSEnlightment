var myObj = {
    name: 'Wael',
    age: 18,
    getAge: function() {
        return this.age;
    }
};

for (prop in myObj){
    console.log(prop);
}

var wael = Object.assign({},myObj);

console.log(Object.values(myObj));
console.log(wael.getAge());
