const {UserService}=require('../service/index')

const userService=new UserService()

const create=async(req,res)=>{
    try{
        const response=await userService.createUser(req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'new user created successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to create the user',
            data:{},
            err:error,
            success:false
        })
    }
}

const get=async(req,res)=>{
    try{
        const response=await userService.getUser(req.params.id)
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:'user data fetched successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to fetch the user',
            data:{},
            err:error,
            success:false
        })
    }
}

const update=async(req,res)=>{
    try{
        const response=await userService.updateUser(req.params.id,req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'user data updated successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to update the user',
            data:{},
            err:error,
            success:false
        })
    }
}

const destroy=async(req,res)=>{
    try{
        const response=await userService.deleteUser(req.params.id)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'user deleted successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to delete the user',
            data:{},
            err:error,
            success:false
        })
    }
}

const login=async(req,res)=>{
    try{
       const response=await userService.login(req.body)
       return res.status(201).json({
        message:'logged in successfully',
        success:true,
        err:{},
        data:response
       });
    }
    catch(error){
        return res.status(500).json({
            message:'not able to login',
            success:false,
            err:error,
            data:{}
        })
    }
}

module.exports={
    create,
    get,
    update,
    destroy,
    login
}