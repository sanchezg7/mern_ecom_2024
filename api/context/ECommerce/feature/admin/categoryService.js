import Category from "../../repository/category.js";
import slugify from "slugify";

export async function create(data) {
    const { name } = data;
    // Keeping here in service because it's not complex enough to put into an object, for now.
    if(!name.trim()){
        throw new Error("Name is required");
    }
    const match = await Category.findOne({name: name});
    if(match){
        throw new Error("Category already exists");
    }
    const command = new CreateCategoryCommand(name);
    const category = await new Category({
        name: command.name,
        slug: command.slug
    }).save();
    return category;
}

export default {
    create
}