import express from 'express';
const router = express.Router();

import { injectUserContextMdlw, enforceAdminRoleOrThrowMdlw } from '../../../UserManagement/feature/authentication/controller/authenticationMiddleware.js';
import Category from "../../repository/category.js";
import slugify from "slugify";
import CategoryService from "./categoryService.js";

router.get('/category', async (req, res) => {
    const categories = await CategoryService.list();
    res.status(200).json(categories);
});

router.post('/category', async (req, res) => {
   try {
       const category = await CategoryService.create(req.body)
       res
           .status(200)
           .send(
           {
               'category': {
                name: category.name,
                slug: category.slug,
               }
           })
   } catch (err) {
       console.error(err);
       return res.status(400).json({error: err.message});
   }
});

router.delete('/category/:categoryId', async (req, res) => {
    try{
        const { categoryId } = req.params;
        await CategoryService.deleteById(categoryId)
    }catch(err){
        console.error(err);
        return res.status(400).json({
            error: err.message
        })
    }
})

router.put('/category/:categoryId', async (req, res) => {
    try{
        const { categoryId  } = req.params;
        const category = await CategoryService.updateName(categoryId, req.body);
        res.status(200).json(category);
    }catch (err) {
        console.error(err);
        return res.status(400).json({error: err.message});
    }
})

router.get('category/:slug', async (req, res) => {
    try{
        const slug = req.params.slug;
        const category = await CategoryService.getBySlug(slug);
        res.json(category);
    }catch (err) {
        console.error(err);
        return res.status(400).json({error: err.message});
    }
})

export default router;