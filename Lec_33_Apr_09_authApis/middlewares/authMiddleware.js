import { User } from "../models/User.js"
import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {

    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('invalid token')
    }
    const token = authHeader.split(' ')[1]    // 'Bearer Token' => ['Bearer' , 'token']
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const user = await User.findById(decoded.id)
    if (!user) {
        return res.status(200).send('invalid token.')
    }

    next()
}

export default authMiddleware
