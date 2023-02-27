import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
import connectDB from './config/db.js';
// Import routes
import productRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 5000;
app.use(cors());

// Routes
app.use('/api/products', productRoutes);
app.use('*', (req, res) => {
    res.status(404).json({ message: `Nothing found at ${req.originalUrl}` });
});

// Start server
app.listen(port, () => {
    connectDB();
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
