//test cases for unit fun sum
const sum = require('./test/sum')


//jest test cases
//test function to test
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe()-->exactly equal
    //expect()--->to execute our unit function(sum)
})
//run 'npm test'

//toEqual
test('Object in array',()=>{
    const data = {one:1}
    data['two']=6;
    expect(data).toEqual({one:1,two:6});
})

//toBeNull-checks the value is null or not
test('value is null',()=>{
    const n=null;
    expect(n).toBeNull();
})

//toBeDefined-checks if a value is defined or not
test('value is defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})

//toBeTruthy-received value shoul be true
test('value is true',()=>{
    const bool=true;
    expect(bool).toBeTruthy();
})


//tobeFalsy-received value should be false
test('value is false',()=>{
    const bool=false;
    expect(bool).toBeFalsy();
})
