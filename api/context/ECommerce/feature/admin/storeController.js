import express from 'express';
const router = express.Router();

import { injectUserContextMdlw, enforceAdminRoleOrThrowMdlw } from '../../../UserManagement/feature/authentication/controller/authenticationMiddleware.js';
import Category from "../../repository/category.js";
import slugify from "slugify";
import CategoryService from "./categoryService.js";

router.get('/category', (req, res) => {
    return res.status(200).send({"message": "yes"})
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

router.delete('/category/:categoryId', (req, res) => {
    // try{
    //     await CategoryService.deleteOne({})
    // }catch(err){
    //     console.error(err);
    //     return res.status(400).json({
    //         error: err.message
    //     })
    // }
})

router.put('/category', async (req, res) => {})

router.get('category', async (req, res) => {})

export default router;