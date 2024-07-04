const mongoose =require('mongoose')

const itemScheme=new mongoose.Schema({
    StudentRollNo:String,
    Subject:String,
    Grade:String,
    Marks:Number
})

const itemModel=mongoose.model("Item",itemScheme)
module.exports=itemModel