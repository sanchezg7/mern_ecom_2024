import Category from "../../../repository/category.js";

/**
 *
 * @param {DeleteCategoryByIdCommand} command
 * @constructor
 */
function deleteByCategoryId(command) {
    return Category.findByIdAndDelete(command.categoryId)
}

export default {
    deleteByCategoryId
};