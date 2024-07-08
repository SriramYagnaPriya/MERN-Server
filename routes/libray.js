const express = require('express')
const router = express.Router();
//const Author = require('../model/authorSchema');
const Book = require('../model/bookSchema');

router.get('/',async (req,res)=>{
    try{
        const data = await Book.find();
        res.status(201).send(data);
    }catch(err){
        res.status(500).send({message:err})
    }
})
module.exports=router;