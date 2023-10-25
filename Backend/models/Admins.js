const mongoose=require('mongoose');
const {Schema}=mongoose;

const AdminSchema=new Schema({
    fullName:{
        type:String,
        default:'',
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Admins',AdminSchema);