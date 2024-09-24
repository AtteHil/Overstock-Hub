import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    amount: { type: Number, required: true },
    price: { type: Number, required: true },
    county: { type: String, required: true },
    city: { type: String, required: true },
    streetAddress: { type: String, required: true },
    zipCode: { type: String, required: true },
    description: { type: String, required: false },
    state: { type: String, default: 'available', required: true },
});

const Offer = mongoose.model('Offer', offerSchema);

export default Offer;