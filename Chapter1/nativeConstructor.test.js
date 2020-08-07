const myBoolean = require('./nativeConstructors');


test('myBoolean constructor is Boolean()', () =>{
    expect(myBoolean.constructor).toBe(new Boolean().constructor);
});