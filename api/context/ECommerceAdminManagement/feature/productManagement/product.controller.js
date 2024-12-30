import express from 'express';
import formidable from 'express-formidable';
import ProductService from "./product.service.js";
import Product from "./domain/Product.js";
const router = express.Router();

router.post('/', formidable(), async (req, res) => {
    const { fields, files } = req;
    const productDto = new Product(fields, files);
    const product = await ProductService.create(productDto);
    res.status(201).json(product);
});

export default router;