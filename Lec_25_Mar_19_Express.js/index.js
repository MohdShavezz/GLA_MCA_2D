import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routes/product.js'
dotenv.config({})

const app = express()
app.use(express.static('public'));
app.use(express.json())
app.set('view engine', 'ejs');

let list=['apple','banana','kiwi']
app.get('/ssr', (req, res) => {
    res.render('index',{data:list});
})

app.use('/api',productRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('server is running on ', PORT)
})