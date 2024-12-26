import slugify from "slugify";

/**
 *
 * @param name
 * @returns {UpdateCategoryNameAndSlugCommand}
 * @constructor
 */
function UpdateCategoryNameAndSlugCommand(categoryId, name) {
    this.categoryId = categoryId;
    this.name = name;
    this.slug = slugify(this.name)
    return this;
}

export default UpdateCategoryNameAndSlugCommand;