import express from 'express'
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/product.js'
const app=express()
const router=app.router


router.route('/products').get(getProducts)
router.route('/product/:id').get(getProduct).delete(deleteProduct).put(updateProduct)
router.route('/product').post(addProduct)

export default router