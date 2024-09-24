import express from "express";
import Offer from "../models/Offer.js";
const router = express.Router();

// Fetch offers by productName and county
router.post('/', async (req, res, next) => {
  const { productName, county } = req.body;
  
  try {
    const offers = await Offer.find({ productName, county });

    if (offers.length === 0) {
      return res.status(404).json({ message: 'No offers found' });
    }

    return res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: 'Error finding offers', error });
  }
});

// Create a new offer
router.post('/create', async (req, res, next) => {
  const { productName, amount, price, county, city, streetAddress, zipCode, description } = req.body;
  const newOffer = new Offer({ productName, amount, price, county, city, streetAddress, zipCode, description });

  try {
    const offer = await newOffer.save();
    res.status(201).json(offer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating offer', error });
  }
});

export default router;