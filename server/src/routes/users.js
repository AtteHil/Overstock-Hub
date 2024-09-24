import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Seller from '../models/seller.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    if (req.body.isSeller) {
      const existingSeller = await Seller.findOne({businessId: req.body.businessId});
      if (existingSeller) {
        return res.status(400).json({message: "Company Id already registered."});
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
      await Seller.create(seller);
      return res.status(201).json({message: "Seller registered successfully."});
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
      await User.create(user);
      return res.status(201).json({message: "User registered successfully."});
    } 
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: "Internal server error."});
  }
});

router.post('/login', async (req, res) => {
  try {
    if (req.body.isSeller) {
      const seller = await Seller.findOne({email: req.body.email});
      if (!seller) {
        return res.status(400).json({message: "Email not found."});
      }
      
      if (bcrypt.compareSync(req.body.password, seller.password)) {
        const jwtPayload = {
          id: seller._id,
          email: seller.email
        };
        const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({success: true, token});
      }
    } else {
      const user = await User.findOne({email: req.body.email});
      if (!user) {
        return res.status(400).json({message: "Email not found."});
      }

      if (bcrypt.compareSync(req.body.password, user.password)) {
        const jwtPayload = {
          id: user._id,
          email: user.email
        };
        const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({success: true, token});
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: "Internal server error."});
  }
});

export default router;