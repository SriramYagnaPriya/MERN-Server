


const mongoose=require('mongoose')
describe('MONGODB CONNECTED',()=>{
    beforeAll(async ()=>{
        const url = 'mongodb+srv://sriramyagnapriya25:22761A05C0@cluster0.p2mwle5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);
    })
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1);
    })
})
