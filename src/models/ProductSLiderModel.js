import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image1: { type: String, required: true },
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

const ProductSliderModel = mongoose.model("productslider", DataSchema);

export default ProductSliderModel;
