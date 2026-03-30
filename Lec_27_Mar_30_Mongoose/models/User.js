import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required'],
        length: 100,
        min: 5, max: 20
    },
    age: {
        type: Number,
        required: true
    },
    hobbies: {
        type: [String],
    },
    address: {
        street: {
            type: String
        },
        zipcode: {
            type: Number
        }
    },
    status: {
        enum: ["pending", "process", "end"],
        default: 'pending'
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                // Use a regular expression test within the validator function
                return /^\d{10}$/.test(v.toString());
            },
            message: props => `${props.value} is not a valid 10-digit number!`
        }
    }

})

export const User=mongoose.model('User',userSchema)