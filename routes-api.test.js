//routes-api.test.js
//jest rest 
//well teat if it contains all the parts or not
const app = require('./index');
const request = require('supertest');

describe('GET /users ',()=>{
    test('GET users from /user ap1',async()=>{
        const res=await  request(app)
        .get('/users')
        .expect(200);
        console.log(res.body.getAllUsers[0]);
        const data = res.body;
        data.getAllUsers.forEach(user=>{
            expect(user).toHaveProperty('_id');
        });
    })
})