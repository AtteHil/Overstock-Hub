import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    businessId: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    city: { type: String, required: true },
    streetAddress: { type: String, required: true },
    zipCode: { type: String, required: true },
    password: { type: String, required: true }
});

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;