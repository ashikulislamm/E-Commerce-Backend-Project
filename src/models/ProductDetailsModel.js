import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String },
    image4: { type: String },
    description: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductDetailsModel = mongoose.model("productdetails", DataSchema);

export default ProductDetailsModel;
