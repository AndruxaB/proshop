import Product from '../models/productModel.js';

export async function getAllProducts(req, res) {
    try {
        res.json(await Product.find({}));
    } catch (error) {
        return error.message;
    }
}

export async function getProductById(req, res) {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
