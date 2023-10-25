const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/admin";

const connectToMongo=async()=>{
    try{
        mongoose.set("strictQuery",false);
        mongoose.connect(mongoURI);
        console.log("Connection Successful, Connected to Admin");
    }catch(error){
        console.log(error);
    }
}

module.exports=connectToMongo;