const {connectDB} = require('../mongoDB/dbConection')
const {Router} = require('express')
 let studentRouter = new Router()

let studentCollection

async function getstudent(){
    studentCollection = await connectDB('student')
}

getstudent()
 studentRouter.post('/student',(req,res)=>{
  
 })

 module.exports = studentRouter