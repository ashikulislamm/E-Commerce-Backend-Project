import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    categoryName : {type:String , required:true , unique:true},
    categoryImage: {type:String , required:true}
})

const CategoryModel = mongoose.model("categories",DataSchema)

export default CategoryModel;