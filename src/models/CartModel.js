import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    quantity: {type: String, required: true},
    size: {type: String, required: true},
    color: {type: String, required: true},
},
{
    timestamps:true,
    versionKey:false
})

const CartModel = mongoose.model("cart",DataSchema)

export default CartModel;