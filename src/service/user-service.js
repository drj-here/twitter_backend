const {UserRepository}=require('../repository/index')

class UserService{
    constructor(){
        this.userRepository=new UserRepository()
    }

    async getUser(userId){
        try{
           const user=await this.userRepository.get(userId)
           return user;
        }
        catch(error){
            console.log('Something went wrong in the service layer')
            throw error;
        }
    }

    async getUserByEmail(email){
        try{
           const user=await this.userRepository.getBy({email})
           return user;
        }
        catch(error){
            throw error;
        }
    }

    async login(data){
        try{
        const user=await this.getUserByEmail(data.email)
        if(!user){
            throw error({message:'User with email does not exist'})
        }

        if(!user.comparePassword(data.password)){
            throw error({message:'Incorrect password'})
        }
        const token=user.genJWT()
        return token;
        }
        catch(error){
            console.log('something went wrong in the service layer')
            throw error;
        }
    }

    async updateUser(userId,data){
        try{
           const user=await this.userRepository.update(userId,data)
           return user;
        }
        catch(error){
            console.log('Something went wrong in the service layer')
            throw error;
        }
    }

    async createUser(data){
        try{
           const user=await this.userRepository.create(data)
           return user;
        }
        catch(error){
            console.log('Something went wrong in the service layer')
            throw error;
        }
    }

    async deleteUser(userId){
        try{
           const response=await this.userRepository.delete(userId)
           return response;
        }
        catch(error){
            console.log('Something went wrong in the service layer')
            throw error;
        }
    }
}

module.exports=UserService;