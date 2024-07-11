//mock.test.js
//mock getData and process the Mocked Data
//mock module 
//module('url')
jest.mock('./test/utils',()=>(
   { getData:jest.fn(),
    getRaw:jest.fn()
   }

))
const {getData,getRaw} = require('./test/utils');
const {processData,processRaw} = require('./test/processData');

//mockreturn value->
test('Mock the Process data',()=>{
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('Processed:Mocked Data');

});
test('Mock Raw Data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
})