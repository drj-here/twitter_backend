const mongoose=require('mongoose')

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'tweet in 250 words']
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ],
    img:{
        type:String 
    }
},{timestamps:true})

tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \n created by ${this.userEmail}`
})

const Tweet=mongoose.model('Tweet',tweetSchema)
module.exports=Tweet