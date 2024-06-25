import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './db/index.js';

const app = express();

// Middleware and Routes here...

const PORT = process.env.PORT || 8000;

// Connect to Database and start server
connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("Database connection failed:", err);
});
