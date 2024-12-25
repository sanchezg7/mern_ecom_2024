import Category from "../../repository/category.js";
import slugify from "slugify";

export async function create(data) {
    const { name } = data;
    if(!name.trim()){
        throw new Error("Name is required");
    }
    const match = await Category.findOne({name: name});
    if(match){
        throw new Error("Category already exists");
    }
    const category = await new Category({name, slug: slugify(name)}).save();
    return category;
}

export default {
    create
}