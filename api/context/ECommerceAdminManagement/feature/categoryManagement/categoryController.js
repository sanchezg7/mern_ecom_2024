import express from 'express';
const router = express.Router();

import { injectUserContextMdlw, enforceAdminRoleOrThrowMdlw } from '../../../UserManagement/feature/authentication/controller/authenticationMiddleware.js';
import Category from "../../repository/category.js";
import slugify from "slugify";
import CategoryService from "./categoryService.js";

router.get('/', async (req, res) => {
    const categories = await CategoryService.list();
    res.status(200).json(categories);
});

router.post('/', async (req, res) => {
   try {
       const category = await CategoryService.create(req.body)
       res
           .status(200)
           .send(
           {
               'category': {
                    name: category.name,
                    slug: category.slug,
                    id: category._id
               }
           })
   } catch (err) {
       console.error(err);
       return res.status(400).json({error: err.message});
   }
});

router.delete('/:categoryId', async (req, res) => {
    try{
        const { categoryId } = req.params;
        await CategoryService.deleteById(categoryId);
        res.status(200).send({message: "Deleted."});
    }catch(err){
        console.error(err);
        return res.status(400).json({
            error: err.message
        })
    }
})

router.put('/:categoryId', async (req, res) => {
    try{
        const { categoryId  } = req.params;
        const category = await CategoryService.updateName(categoryId, req.body);
        res.status(200).json(category);
    }catch (err) {
        console.error(err);
        return res.status(400).json({error: err.message});
    }
})

router.get(':slug', async (req, res) => {
    try{
        const slug = req.params.slug;
        const category = await CategoryService.getBySlug(slug);
        res.json(category);
    } catch (err) {
        console.error(err);
        return res.status(400).json({error: err.message});
    }
})

export default router;