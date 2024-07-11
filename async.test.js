//async.test.js
const {MyData} = require('./test/async');

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
