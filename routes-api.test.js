// //routes-api.test.js
// //jest test to test our http get method
// //well test if it contains all the parts or not
// const { describe } = require('node:test');
// const app=require('./index');
// const request=require('supertest');
// describe('GET/users',()=>{
//     test('GET users from /user api',async()=>{
//         const res=await request(app)
//         .get('/users')
//         .expect(200);
//         console.log(res.body.getAllUsers[0])
//         const data=res.body
//         data.getAllUsers.forEach(user=>{
//             expect(user).toHaveProperty('_id')
//             expect(user).toHaveProperty('email')
//         })

//     })
// })