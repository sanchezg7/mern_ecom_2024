/**
 *
 * @typedef Product
 * @property _id
 * @property name
 * @property slug
 * @property description
 * @property price
 * @property category
 * @property quantity
 * @property sold
 * @property photo
 * @property isShippingEligible
 */

/**
 *
 * @returns {Product}
 * @constructor
 */
function Product(fields, files) {
    // TODO: add validation here
    Object.assign(this, fields);
    this.photo = files.photo;
    return this;
}
export default Product;