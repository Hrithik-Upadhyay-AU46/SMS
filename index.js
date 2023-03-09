const express = require('express')
const app = express()
const path = require('path')
const studentRoute = require('./routes/studentRoute')
const port = 8899


app.use(express.static("public"))
app.use(express.static("public/notification"))
app.use(express.static("public/homework"))
app.use(express.static("public/result"))
app.use(express.static("public/login"))
app.use(express.static("public/admin"))
app.use('/student', studentRoute)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/login/login.html'))
  })

app.get('/dashbord',(req,res)=>{
  res.sendFile(path.join(__dirname,'./public/dashbord.html'))
})

app.get('/notification',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/notification/notification.html'))
})

app.get('/homework',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/homework/homework.html'))
})

app.get('/result',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/result/result.html'))
})

app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/admin/admin.html'))
})

app.listen(port,()=>{
    console.log('listining')
})