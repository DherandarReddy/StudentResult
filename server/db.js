const mongoose=require('mongoose');

const connectDB =async()=>{
    try{
        const conn =await mongoose.connect(
            'mongodb://localhost:5173/Vvit')
        // console.log(`MongoDB Connected:${conn.connection.host}`);
        console.log(`Mongodb Connected`);
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
};

module.exports=connectDB;