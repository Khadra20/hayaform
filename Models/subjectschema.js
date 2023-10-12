const  mongoose  = require("mongoose");

const subject=mongoose.Schema({
 name:{type:String,required:true}
})
const subjectmodel=mongoose.model('subject',subject)
module.exports=subjectmodel