import slugify from "slugify";

/**
 *
 * @param name
 * @returns {CreateCategoryCommand}
 * @constructor
 */
function CreateCategoryCommand(name) {
    this.name = name;
    this.slug = slugify(this.name);
    return this;
}

export default CreateCategoryCommand;