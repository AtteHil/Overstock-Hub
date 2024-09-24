import express from "express";
import Offer from "../models/Offer.js";
const router = express.Router();

router.post('/', async (req, res, next) => {
  const { productName, county } = req.body;
  
  try {
    const offers = await Offer.find({ productName, county });
    console.log(offers);
    if (offers.length === 0) {
      return res.status(404).json({ message: 'No offers found' });
    }

    return res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: 'Error finding offers', error });
  }
});

export default router;