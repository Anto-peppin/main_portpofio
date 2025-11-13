const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

mongoose.connect(`${process.env.DB}`).then(val=>console.log('DB connected successfully...'))


const projects = mongoose.model('projects',{img:String,title:String,dis:String,link:String},'projects')
const user = mongoose.model('user',{name:String,city:String,mail:String,discution:String,time:String},'user')
app.get('/projects',async(req,res)=>{
  try {
     const data = await projects.find()
     res.send(data)
  } catch (error) {
    console.log(error.message);
    
  }

})

app.post('/user',async(req,res)=>{

  
  try {
    const inse = await user.insertOne(req.body.user)
    
    res.send(true)
  } catch (error) {
    console.log(error.message);
    res.send(false)
    
    
  }
})



app.listen(process.env.PORT || 3000,()=>console.log('Server Start...'))

