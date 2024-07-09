//test//asyc.js

const { useFetcher } = require("react-router-dom");

//how we can perform on async function
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}
function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },3000)
}
//calls admin after 4 seconds
module.exports = {fetchData,MyData};