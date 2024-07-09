let dataSets = [];
//execute my env before all;
beforeAll(()=>{
    dataSets =['priya','saran'];
})
beforeEach(()=>{
    console.log('Before Each set up is called')
})
afterEach(()=>{
    console.log('After each set up is called')
})
afterAll(()=>{
    dataSets = [];
})

test('Test Case',()=>{
    expect(dataSets.length).toBe(2);
})
test('Data set contains',()=>{
    expect(dataSets).toContain('priya');
})
test('Data set contains',()=>{
    expect(dataSets).toContain('saran');
})
