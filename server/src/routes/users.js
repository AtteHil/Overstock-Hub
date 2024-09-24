import express from 'express';
import bcrypt from 'bcrypt';
import Seller from '../models/seller.js';
import User from '../models/user.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    if (req.body.isSeller) {
      const existingSeller = await Seller.findOne({businessId: req.body.businessId});
      if (existingSeller) {
        return res.status(400).json({message: "Company Id already registered as seller."});
      }

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);

      const seller = new Seller({
        companyName: req.body.companyName,
        businessId: req.body.businessId,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        city: req.body.city,
        streetAddress: req.body.streetAddress,
        zipCode: req.body.zipCode,
        password: hashedPassword
      });
      
      const newSeller = await seller.save();
      res.status(201).json(newSeller);
    } else {
      const existingUser = await User.findOne({email: req.body.email});
      if (existingUser) {
        return res.status(400).json({message: "Email already registered."});
      }

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      
      const user = new User({
        email: req.body.email,
        password: hashedPassword
      });

      const newUser = await user.save();
      res.status(201).json(newUser);
    }

  } catch (error) {
    console.error(`Error during registration: ${error}`);
    res.status(500).json({error: "Internal server error"});
  }
});

export default router;