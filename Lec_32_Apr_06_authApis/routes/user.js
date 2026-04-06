import express from 'express'
import { getUser, getUsers, login, register } from '../controllers/user.js'
const app=express()
const router=app.router


router.route('/register').post(register)
router.route('/login').post(login)
router.route('/getall').get(getUsers)
router.route('/:id').get(getUser)

export default router