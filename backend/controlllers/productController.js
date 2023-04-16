import Product from '../models/productModel.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export async function getAllProducts(req, res, next) {
    try {
        res.json(await Product.find({}));
    } catch (error) {
        next(error);
    }
}

// @desc    Get product by Id
// @route   GET /api/products/:id
// @access  Public
export async function getProductById(req, res, next) {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            throw new Error('Product not found!');
        }
    } catch (error) {
        next(error);
    }
}
