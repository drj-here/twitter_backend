const LikeService=require('../service/like-service')

const likeService=new LikeService()

export const createComment=async(req,res)=>{
    try{
        const response=await likeService.toggleLike(req.query.modelId,req.query.modelType,req.user.id)
        return res.status(201).json({
            data:response,
            success:true,
            err:{},
            message:'successfully toggled the like'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'Something went wrong',
            success:false,
            err:error,
            data:{}
        })
    }
}