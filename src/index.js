import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './db/index.js';

const app = express();

// Connect to Database
connectDB();

// Middleware and Routes here...

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
