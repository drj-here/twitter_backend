const mongoose=require('mongoose')
const {MONGODB_URI,DB_NAME}=require('./serverConfig')

const connectDB=async()=>{
    try{
        mongoose.set('strictQuery',false)
       await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
       console.log(`Mongodb connected successfully`)
    }
    catch(error){
        console.log('Mongodb connection failed. Error: ',error)
    }
}

module.exports=connectDB
