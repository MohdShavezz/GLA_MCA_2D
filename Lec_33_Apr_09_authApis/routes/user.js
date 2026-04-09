import express from 'express'
import { getUser, getUsers, login, register,forgotPassword ,resetPassword} from '../controllers/user.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const app=express()
const router=app.router

function m1(req,res,next){
    console.log('m1 middleware')
    next()
}
function m2(req,res,next){
    console.log('m2 middleware')
    next()
}

router.route('/register').post(register)
router.route('/forgot-password').post(forgotPassword)
router.route('/reset-password').post(resetPassword)
router.route('/login').post(login)
router.route('/getall').get(authMiddleware,getUsers) //protected route
router.route('/:id').get(m1,m2,getUser)

export default router