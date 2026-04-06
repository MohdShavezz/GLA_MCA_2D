import { User } from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


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