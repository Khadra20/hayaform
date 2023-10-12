const express=require('express')
// const {PORT,URL}=require('./Config');
const  mongoose=require('mongoose')
const cors = require('cors');
const route=require('./Routes/userrout');
const subrout=require('./Routes/subjectrout')
 const app=express();

 app.use(express.json())
app.use(cors());

 
 const dbconnect=async()=>{
    const password = 'salon123';
  
    const uri = `mongodb+srv://hayat:${password}@cluster0.yo08vqy.mongodb.net/test?retryWrites=true&w=majority`;
    // Connect to the MongoDB Atlas cluster
  
      return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => { app.listen(1000,()=>{
  console.log("server startef")
      })})
      .catch(error => console.error('Error connecting to MongoDB Atlas:', error));
      
  }
  dbconnect();

 
    app.use('/',route)
    app.use('/subject',subrout)
    app.use('/user',route)


    
    app.get('/',(req,res)=> {
      res.json("hi this ")
    
      
      })