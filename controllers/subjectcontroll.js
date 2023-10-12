const subjectmodel=require('../Models/subjectschema')

  //   qeebta getka 
const getsubject=async(req,res)=>{
    try {
        const soohelsubject=await subjectmodel.find()
        res.status(200).send(soohelsubject)
    } catch (error) {
        console.log("error ayaa jira dhanka getka" )
    }

}
   //  qeebta postiga 
  
   const postsubject=async(req,res)=>{
    try {
        const subject=subjectmodel(req.body)
        await subject.save()
        res.status(201).send(subject)
    } catch (error) {
         console.log(error,"error ayaaa jira dhanka postiga")
    }
   
   }

//   qeebta update ama put


 const putsubject=async(req,res)=>{
    try {
        const {id}=req.params;
        const update=await subjectmodel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send( {message:"waala updategareye"}  ,update)
    } catch (error) {
        console.log("error ayaa dhacey dhanka updateka")
    }
  
 }

    //   qeebta deletka

    const deletesubject=async(req,res)=>{
        try {
            const {id}=req.params;
            const deletes=await subjectmodel.findByIdAndDelete(id)
            res.status(200).send({message:"waala daleede xogtan"},deletes)
        } catch (error) {
            console.log("error ayaa ka jira dhanka deletka ")
        }
       
    }

    exports.getsubject=getsubject,
exports.postsubject=postsubject,
exports.putsubject=putsubject,
exports.deletesubject=deletesubject