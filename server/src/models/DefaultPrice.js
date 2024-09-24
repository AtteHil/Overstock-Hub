import mongoose from "mongoose";

const defaultPriceSchema = new mongoose.Schema({
    productPrices: { 
        type: Map, 
        of: String, 
        required: true 
    }
});

const DefaultPrice = mongoose.model('DefaultPrice', offerSchema);

export default DefaultPrice;