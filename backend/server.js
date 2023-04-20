import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();
import connectDB from './config/db.js';
// Import routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json()); // to get req.body

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// app.use('*', (req, res) => {
//     res.status(404).json({ message: `Nothing found at ${req.originalUrl}` });
// });

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, () => {
    connectDB();
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
