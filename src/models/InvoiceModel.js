import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    payable: {
      type: String,
      required: true,
    },
    customer_details: { type: String, required: true },
    shipping_details: { type: String, required: true },
    trnx_id: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const InvoiceModel = mongoose.model("invoice", DataSchema);

export default InvoiceModel;
