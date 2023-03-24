const ReviewService=require('../service/review.service');

exports.createComment=async(req,res)=>{
    try {
        const comment=await ReviewService.createCommnet(req.body);
        res.status(200).send({
            success:true,
            message:"comment successfully",
            data:comment
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Something went wrong",
         
        })
    }
}
exports.destroyComment=async(req,res)=>{
    try {
        const comment=await ReviewService.destroyComment(req.params.id);
        res.status(200).send({
            success:true,
            message:"comment delete successfully",
            data:comment
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Something went wrong",
         
        })
    }
}
exports.updateComment=async(req,res)=>{
    try {
        const comment=await ReviewService.updateCommnet(req.params.id);
        res.status(200).send({
            success:true,
            message:"comment update successfully",
            data:comment
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Something went wrong",
         
        })
    }
}