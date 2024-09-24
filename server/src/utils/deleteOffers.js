import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Offer from '../models/Offer.js'; // Adjust the path as necessary
dotenv.config();

const deleteOfferData = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@overstockhub.5dyyc.mongodb.net/?retryWrites=true&w=majority&appName=OverstockHub`);
    mongoose.Promise = Promise;

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error'));
    db.on('connected', () => { console.log("Connected to database") });

    await Offer.deleteMany({});
    console.log('Example data deleted successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting example data:', error);
  }
};

deleteOfferData();