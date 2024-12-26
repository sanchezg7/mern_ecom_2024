import Category from "../../../repository/category.js";
/**
 *
 * @param {GetCategoryBySlugQuery} query
 */
function getCategoryBySlug(query) {
    return Category.findOne({ slug: query.slug }).exec()
}

export default {
    getCategoryBySlug,
    /**
     *
     * @param {UpdateCategoryNameAndSlugCommand} command
     * @returns
     */
    updateCategoryNameAndSlug(command) {
        return Category.findByIdAndUpdate(command.categoryId, {
            name: command.name,
            slug: command.slug,
        }, {
            new: true
        })
    }
}