import ProductModel from "../../repository/product.js";
import slugify from "slugify";
import fs from "fs";

/**
 *
 * @param {Product} data
 */
function create(data){
    const product = new ProductModel({
        ...data,
        slug: slugify((data.name))
    });

    if(data.photo){
        product.photo.data = fs.readFileSync(data.photo.path);
        product.photo.contentType = data.photo.type;
    }

    return product.save();
}

async function list() {
    return ProductModel
        .find({})
        .select('-photo')
        .limit(12)
        .sort({createdAt: -1});
}

export default {
    create,
    list
};