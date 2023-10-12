
const express =require('express')
const route=express.Router();
const usermodel=require('../controllers/usercontrol')
route.get('/',usermodel.getuser)
route.post('/signup',usermodel.signup)
route.delete('/:id',usermodel.deleteuser)
module.exports=route;