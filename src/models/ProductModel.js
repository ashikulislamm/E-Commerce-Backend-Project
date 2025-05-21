import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    shortDescription: { type: String, required: true },
    price: { type: double, required: true },
    discount: { type: Boolean, required: true },
    discountPrice: { type: String, required: true },
    image: { type: String, required: true },
    Stock: { type: Boolean, required: true },
    discount: { type: Boolean, required: true },
    productCategory: { type: String, required: true },

    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CategoryModel = mongoose.model("categories", DataSchema);

export default CategoryModel;
