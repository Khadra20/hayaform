const mongoose=require('mongoose')

const Userschema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    status:{type:String,default:'active',
     enum:(['active','inactive'])
    }
})
const usermodel=mongoose.model('User',Userschema)
module.exports=usermodel