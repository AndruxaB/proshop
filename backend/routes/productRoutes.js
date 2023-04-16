import express from 'express';
import { getAllProducts, getProductById } from '../controlllers/productController.js';

const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/:id').get(getProductById);

// router.get('/', async (req, res) => {
//     getAllProducts(req, res);
// });

// router.get('/:id', (req, res) => {
//     getProductById(req, res);
// });

export default router;
