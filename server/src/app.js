import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import usersRouter from './routes/users.js';
import offersRouter from './routes/offers.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5050;
const corsOpts = {
    origin: 'http://localhost:3000',
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionsSuccessStatus: 200,
};


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@overstockhub.5dyyc.mongodb.net/?retryWrites=true&w=majority&appName=OverstockHub`);
mongoose.Promise = Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.on('connected', () => { console.log("Connected to database") });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOpts));
app.use(morgan('combined'));

app.use('/users', usersRouter);
app.use('/offers', offersRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});