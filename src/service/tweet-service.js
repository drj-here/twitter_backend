const {TweetRepository}=require('../repository/index')
const {HashtagRepository}=require('../repository/index')
class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository()
        this.hastagRepository=new HashtagRepository()
    }

    async create(data){
       try{
          const content=data.content;
          const tags=content.match(/#[a-zA-Z0-9_]+/g)
                      .map((tag)=>tag.substring(1).toLowerCase())
          const tweet=await this.tweetRepository.create(data)
          const alreadyPresentTags=await this.hastagRepository.findByName(tags)
          const titleOfPresentTags=alreadyPresentTags.map(tags=>tags.title)
          let newTags=tags.filter(tag=>!titleOfPresentTags.includes(tag))
          newTags=newTags.map(tag=>{
            return {title:tag.title,tweets:[tweet.id]}
          })
          await this.hastagRepository.bulkCreate(newTags)
          alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id)
            tag.save()
          })
          return tweet;
       }
       catch(error){
        throw error;
       }
    }

    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

module.exports=TweetService