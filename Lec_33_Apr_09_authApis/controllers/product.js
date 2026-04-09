import { Product } from "../models/Product.js"

export async function addProduct(req, res) {
    try {
        const { name, price } = req.body
        const prod = await Product.insertOne({ name, price })
        res.status(201).json(prod)
    } catch (error) {
        console.log('error in addProduct', error)
    }
}

export async function getProducts(req, res) {
    try {
        const prods = await Product.find()
        res.status(200).json(prods)
    } catch (error) {
        console.log('error in getProducts', error)
    }
}
export async function getProduct(req, res) {
    try {
        const { id } = req.params
        // const prod = products.find(ele => ele.id == id)
        const prod = await Product.findById(id)
        res.status(200).json(prod)
    } catch (error) {
        console.log('error in getProduct: ', error.message)
    }
}
export async function deleteProduct(req, res) {
    try {
        const { id } = req.params
        await Product.findByIdAndDelete(id)
        res.status(200).send('product deleted')
    } catch (error) {
        console.log('error in deleteProduct: ', error.message)
    }
}

export async function updateProduct(req, res) {
    try {
        const payload = req.body
        const { id } = req.params
        const prod= await Product.findByIdAndUpdate(id,payload,{new:true})

        res.status(201).send(prod)
    } catch (error) {
        console.log('error in updateProduct', error)
    }

}