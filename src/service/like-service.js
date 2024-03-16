const {LikeRepository,TweetRepository,CommentRepository}=require('../repository/index')
const Tweet=require('../model/tweet')

class LikeService{

    constructor(){
         this.likeRepository=new LikeRepository()
         this.tweetRepository=new TweetRepository()
         this.commentRepository=new CommentRepository()
    }
    async toggleLike(modelId,modelType,userId){
     try {
         if(modelType=='Tweet'){
            var likeable=await this.tweetRepository.get(modelId)
         }
         else if(modelType=='Comment'){

         }
         else{
            throw new Error('Unknown model type')
         }

         const exists=await this.likeRepository.findByUserAndlikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
         })

         if(exists){
            likeable.likes.pull(exists.id)
            await likeable.save()
            await exists.remove()
            var isAdded=false;
         }
         else{
             const newLike=await this.likeRepository.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
             })
             likeable.likes.push(newLike)
             await likeable.save()
             var isAdded=true;
         }
         return isAdded
     } catch (error) {
        console.log("Something went wrong in the service layer")
        throw error;
     }
    }
}

module.exports=LikeService;