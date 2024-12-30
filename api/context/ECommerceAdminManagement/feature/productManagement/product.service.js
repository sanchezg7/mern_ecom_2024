import ProductModel from "../../repository/product.js";
import slugify from "slugify";

/**
 *
 * @param {Product} data
 */
function create(data){
    const product = new ProductModel({
        ...data,
        slug: slugify((data.name))
    })

    return product.save();
}

export default {
    create
};