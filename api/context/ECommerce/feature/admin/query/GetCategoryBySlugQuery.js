/**
 *
 * @param slug
 * @returns {GetCategoryBySlugQuery}
 * @constructor
 */
function GetCategoryBySlugQuery(slug) {
    this.slug = slug;
    return this;
}

export default GetCategoryBySlugQuery;