const CommentService=require('../service/comment-service')

const commentService=new CommentService()

export const createComment=async(req,res)=>{
    try{
        const response=await commentService.create(req.query.modelId,req.query.modelType,req.user.id,req.body.content)
        return res.status(201).json({
            data:response,
            success:true,
            err:{},
            message:'successfully created the comment'
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