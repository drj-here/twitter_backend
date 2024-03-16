const CrudRepository=require('./crud-repo')
const Like=require('../model/like')

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like)
    }

    async findByUserAndlikeable(data){
        try{
           const like=await Like.findOne(data)
           return like;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error
        }
    }
}

module.exports=LikeRepository