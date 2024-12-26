import Category from "../../repository/category.js";
import CreateCategoryCommand from "./command/CreateCategoryCommand.js";
import CategoryCommandHandler from './command/CategoryCommandHandler.js';
import GetCategoryBySlugQuery from "./query/GetCategoryBySlugQuery.js";
import CategoryQueryHandler from "./query/CategoryQueryHandler.js";
import UpdateCategoryNameAndSlugCommand from "./command/UpdateCategoryNameAndSlugCommand.js";
import DeleteCategoryByIdCommand from "./command/DeleteCategoryByIdCommand.js";

async function create(data) {
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
 async function getBySlug(slug) {
    const query = new GetCategoryBySlugQuery(slug);
    return CategoryQueryHandler.getCategoryBySlug(query);
}


async function updateName(categoryId, data){
    const command = new UpdateCategoryNameAndSlugCommand(categoryId, name);
    return CategoryQueryHandler.updateCategoryNameAndSlug(command);
}

async function deleteById(categoryId) {
    const command = new DeleteCategoryByIdCommand(categoryId);
    return CategoryCommandHandler.deleteByCategoryId(command);
}

/**
 * Example where we skip the boilerplate for trivial processes
 */
async function list() {
    return Category.find({});
}

export default {
    create,
    getBySlug,
    updateName,
    deleteById,
    list
}