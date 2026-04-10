import { User } from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { transporter } from "../utils/emailer.js"


export async function register(req, res) {
    try {
        const { name, email,password } = req.body
        if(!email && !password){
            throw Error('enter creds.')
        }
        const user=await User.findOne({email})
        console.log(user)
        if(user){
           return res.status(200).send('user already exists.')
        }

        const hashPass = await bcrypt.hash(password, 10);

        const prod = await User.insertOne({ name, email,password:hashPass })
        res.status(201).json(prod)
    } catch (error) {
        console.log('error in register', error)
    }
}
export async function login(req, res) {
    try {
        const {  email,password } = req.body
        if(!email && !password){
            throw Error('enter creds.')
        }
        const user=await User.findOne({email})
        if(!user){
           return res.status(200).send('register first.')
        }

        const r = await bcrypt.compare(password, user.password);
        if(!r){
            return res.status(200).send('invalid creds')
        }

        const token = jwt.sign({ id: user._id },process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({
            user,
            token
        })
    } catch (error) {
        console.log('error in login', error)
    }
}
export async function getUser(req, res) {
    try {
        const {id}=req.params
        const user=await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        console.log('error in getUser', error)
    }
}
export async function getUsers(req, res) {
    try {
        const users=await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log('error in getUsers', error)
    }
}
export async function forgotPassword(req, res) {
    try {
        const { email } = req.body
        const user=await User.findOne({email})
        if(!user){
           return res.status(200).send('register first.')
        }
        // token
        const token = jwt.sign({ id: user._id },process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        console.log(user)
        console.log(token)
        await transporter.sendMail({
            to:user.email,
            subject:"Reset Email",
            html:`
                <h3>Use this token to reset your password</h3>
                <p> ${token} </p>
            `
        })

        return res.status(200).send('check your email for reset token')


    } catch (error) {
        console.log('error in forgotPassword', error)
    }
}
export async function resetPassword(req, res) {
    try {
        const { newpassword,token } = req.body
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        const user=await User.findById(decoded.id)
        if(!user){
           return res.status(200).send('invalid token.')
        }
        //reset password
        const hashPass = await bcrypt.hash(newpassword, 10);
        user.password=hashPass 
        await user.save()
        return res.status(200).send('password reset sucessfully.')
   
    } catch (error) {
        console.log('error in resetPassword', error)
    }
}
