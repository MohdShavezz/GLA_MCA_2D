import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
   

})

export const Product=mongoose.model('User',productSchema)