import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postalCode: { type: String },
    phone: { type: String },
    shippingAddress: { type: String },
    shippingCity: { type: String },
    shippingCountry: { type: String },
    shippingName: { type: String },
    shippingPhone: { type: String },
    shippingPostalCode: { type: String },
    shippingState: { type: String },
    description: { type: String },
    rating: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProfileModel = mongoose.model("profile", DataSchema);

export default ProfileModel;
