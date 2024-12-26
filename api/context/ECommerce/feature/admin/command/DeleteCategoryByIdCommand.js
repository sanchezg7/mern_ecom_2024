/**
 *
 * @param categoryId
 * @returns {DeleteCategoryByIdCommand}
 * @constructor
 */
function DeleteCategoryByIdCommand(categoryId) {
    this.categoryId = categoryId;
    return this;
}

export default DeleteCategoryByIdCommand;