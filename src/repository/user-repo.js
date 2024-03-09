const {User}=require('../model/index')

class UserRepository{
   
    async get(userId){
        try{
           const user=await User.findById(userId).select('-password')
           if(!user){
            throw error({message:'User does not exist'})
           }
           return user;
        }
        catch(error){
        console.log('something went wrong in repos layer')
        throw error;
        }
    }

    async create(data){
        try{
            const user=await User.create(data);
            return user;
        }
        catch(error){
            console.log(error)
            console.log('something went wrong in the repo layer')
            throw error;
        }
    }

    async getBy(data){
        try{
            const user=await User.findOne(data)
            return user;
        }
        catch(error){
            throw error;
        }
    }

    async update(userId,data){
        try{
           const user=await User.findOneAndUpdate({_id:userId},data,{new:true}).select('-password')
           return user;
        }
        catch(error){
            console.log('something went wrong in the repo layer')
            throw error;
        }
    }

    async delete(userId){
        try{
           const user=await User.deleteOne({_id:userId})
           if(!user){
            throw error({message:'User does not exist'})
           }
           return true;
        }
        catch(error){
            console.log('something went wrong in the repo layer')
            throw error;
        }
    }
}

module.exports=UserRepository