// mongodb+srv://DherandarReddy:<password>@joyboy.2mh8luh.mongodb.net/?retryWrites=true&w=majority&appName=Joyboy

const express =require('express')
const connectDB=require('./db.js')
const itemModel=require('./models/item.js')
const cors=require('cors')

const app=express()

app.use(express.json())
app.use(cors())
connectDB()

app.get('/',async(req,res)=>{
    const response=await itemModel.find()
    return res.json({items:response})
})
app.listen(4000,()=>{
    console.log("App is running");
})