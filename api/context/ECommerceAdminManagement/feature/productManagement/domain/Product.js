/**
 *
 * @typedef Product
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
function Product(data) {
    Object.assign(this, data);
    return this;
}
export default Product;