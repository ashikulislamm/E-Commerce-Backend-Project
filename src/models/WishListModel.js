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
},
{
    timestamps:true,
    versionKey:false
})

const WIshListModel = mongoose.model("wishlist",DataSchema)

export default WIshListModel;