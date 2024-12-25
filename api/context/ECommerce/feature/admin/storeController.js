import express from 'express';
const router = express.Router();

import { injectUserContextMdlw, enforceAdminRoleOrThrowMdlw } from '../../../UserManagement/feature/authentication/controller/authenticationMiddleware.js';
import Category from "../../repository/category.js";
import slugify from "slugify";

router.get('/category', (req, res) => {
    return res.status(200).send({"message": "yes"})
});

router.post('/category', async (req, res) => {
   try {
       const { name } = req.body;
       if(!name.trim()){
        throw new Error("Name is required");
       }
       const match = await Category.findOne({name: name});
       if(match){
           throw new Error("Category already exists");
       }
       const category = await new Category({name, slug: slugify(name)}).save();
       res.status(200).send({'category': {
           name: category.name,
               slug: category.slug,
           }})
   } catch (err) {
       console.error(err);
       return res.status(400).json({error: err.message});
   }
});


export default router;