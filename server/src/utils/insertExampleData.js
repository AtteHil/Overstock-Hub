import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Offer from '../models/Offer.js'; // Adjust the path as necessary
dotenv.config();

const exampleOffers = [
  {
    productName: 'Laptop',
    amount: 10,
    price: 999.99,
    county: 'Uusimaa',
    city: 'Helsinki',
    streetAddress: 'Mannerheimintie 1',
    zipCode: '00100',
    description: 'A high-performance laptop with 16GB RAM and 512GB SSD.'
  },
  {
    productName: 'Smartphone',
    amount: 25,
    price: 699.99,
    county: 'Pirkanmaa',
    city: 'Tampere',
    streetAddress: 'Hämeenkatu 10',
    zipCode: '33100',
    description: 'A latest model smartphone with excellent camera quality.'
  },
  {
    productName: 'Headphones',
    amount: 50,
    price: 199.99,
    county: 'Varsinais-Suomi',
    city: 'Turku',
    streetAddress: 'Aurakatu 5',
    zipCode: '20100',
    description: 'Noise-cancelling over-ear headphones with long battery life.'
  },
  {
    productName: 'Tablet',
    amount: 15,
    price: 499.99,
    county: 'Pohjois-Pohjanmaa',
    city: 'Oulu',
    streetAddress: 'Kauppurienkatu 8',
    zipCode: '90100',
    description: 'A lightweight tablet with a 10-inch display and 128GB storage.'
  }
];

const insertExampleData = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@overstockhub.5dyyc.mongodb.net/?retryWrites=true&w=majority&appName=OverstockHub`);
    mongoose.Promise = Promise;

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error'));
    db.on('connected', () => { console.log("Connected to database") });

    await Offer.insertMany(exampleOffers);
    console.log('Example data inserted successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting example data:', error);
  }
};

insertExampleData();