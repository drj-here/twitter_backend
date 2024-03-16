class CrudRepository{

    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
           const response=await this.model.create(data)
           return response;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
    }
    }

    async destroy(id){
        try{
           await this.model.findByIdAndDelete(id)
           return true;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
    }
    }

    async get(id){
        try{
           const result=await this.model.findById(id)
           return result;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
    }
    }

    async getAll(){
        try{
           const result=await this.model.find()
           return result;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
    }
    }

    async update(id,data){
        try{
           const result=await this.model.findByIdAndUpdate(id,data,{new:true})
           return result;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
    }
    }
}

module.exports=CrudRepository;