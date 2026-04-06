import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routes/product.js'
import userRouter from './routes/user.js'
import dbConn from './db/dbConn.js';

dotenv.config({})
//db connect
dbConn()

const app = express()
app.use(express.json())

app.use('/api',productRouter)
app.use('/api/user',userRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('server is running on ', PORT)
})