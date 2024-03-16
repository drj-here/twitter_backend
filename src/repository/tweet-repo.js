const Tweet=require('../model/index')

class TweetRepository{
      async create(data){
        try{
         const response=await Tweet.create(data)
         return response
        }
        catch(error){
            throw error;
        }
      }

      async getWithComments(id){
        try{
         const tweet=await Tweet.findById(id).populate({
            path:'comments'
         }).lean();
         return tweet;
        }
        catch(error){
            throw error;
        }
      }

      async getAll(offset,limit){
        try{
           const tweets=await Tweet.find().skip(offset).limit(limit)
           return tweets
        }
        catch(error){
            throw error;
        }
      }

      async get(id){
        try{
           const tweet=await Tweet.findById(id).populate({path:'likes'})
           return tweet
        }
        catch(error){
            throw error;
        }
      }
}

module.exports=TweetRepository