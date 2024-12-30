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

router.get('/', async (req, res) => {
   const products = await ProductService.list();
   res.status(200).json(products);
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const product = await ProductService.get(slug);
    res.status(200).json(product);
});

router.get('/photo/:productId', async (req, res) => {
    const { productId } = req.params;
   const product = await ProductService.getPhoto(productId);
   res.set('Content-Type', product.photo.contentType);
   return res.send(product.photo.data);
});

export default router;