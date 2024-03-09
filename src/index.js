const express=require('express')
const app=express()
const connectDB=require('./config/db')
const {PORT}=require('./config/serverConfig')
const bodyParser = require('body-parser')
const apiRoutes=require('./routes/index')


const setupAndStartServer=async()=>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    connectDB() 
    app.use('/api',apiRoutes)
    app.listen(PORT,()=>{
        console.log(`server started on port ${PORT}`)

    })
}

setupAndStartServer()