const express=require('express')
const router=express.Router()
const {UserController}=require('../../controller/index')

router.post('/user/create',UserController.create)
router.get('/user/get/:id',UserController.get)
router.patch('/user/update/:id',UserController.update)
router.delete('/user/delete/:id',UserController.destroy)
router.post('/user/login',UserController.login)
module.exports=router 