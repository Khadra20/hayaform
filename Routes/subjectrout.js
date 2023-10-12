const express=require('express')
const subrout=express.Router();
const subcontroll=require('../controllers/subjectcontroll')
subrout.get('/',subcontroll.getsubject)
subrout.post('/sub',subcontroll.postsubject)
subrout.put('/:id',subcontroll.putsubject)
subrout.delete('/:mid',subcontroll.deletesubject)



module.exports=subrout