//async.test.js
const {fetchData,MyData} = require('./test/async');



test('callback Data',done=>{
    function callback(data){
        try{
            expect(data).toEqual({id:10001});
            done();
        }catch(err){
            done(err);
        }
    }
    MyData(callback);
    
})
//mock function
test('Mocking callback function',done=>{
    const MockFunction = jest.fn(data=>{
        expect(data).toBe('admin');
        console.log('Mock Function');
        done();
    })
    fetchData(MockFunction);
})