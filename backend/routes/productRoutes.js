import express from 'express';
import { getAllProducts, getProductById } from '../controlllers/productController.js';

const router = express.Router();
// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', async (req, res) => {
    getAllProducts(req, res);
});

// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
router.get('/:id', (req, res) => {
    getProductById(req, res);
});

export default router;
