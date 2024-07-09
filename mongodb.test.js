const mongoose = require('mongoose')

describe('MongoDB Connected',()=>{
    beforeAll(async()=>{
        const url = 'mongodb+srv://sriramyagnapriya25:22761A05C0@cluster0.p2mwle5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);

    })
    //call testcase inside describe below beforeall
    test('MogoDB Connected to server',()=>{
        expect (mongoose.connection.readyState).toBe(1);
    })
})

